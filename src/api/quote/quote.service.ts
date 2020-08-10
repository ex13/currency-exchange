import { Injectable } from '@nestjs/common';
import { QuoteRequestDto } from './dto/quote-request.dto';
import { QuoteResponseDto } from './dto/quote-response.dto';
import { CurrencyExchangeService } from '../../common/repositories/currency-exchange/currency-exchange.service';
import {
  calculateQuoteAmount,
  convertToCents,
} from '../../common/helpers/currency.helpers';

@Injectable()
export class QuoteService {
  constructor(private currencyExchangeService: CurrencyExchangeService) {}

  async getQuote({
    base_amount,
    base_currency,
    quote_currency,
  }: QuoteRequestDto): Promise<QuoteResponseDto> {
    const exchangeRate = await this.currencyExchangeService.getExchangeRate(
      base_currency,
      quote_currency
    );
    const exchangeRateFixed = +exchangeRate.toFixed(3);

    const quoteAmount = calculateQuoteAmount(
      base_amount,
      convertToCents(exchangeRateFixed)
    );

    return { exchange_rate: exchangeRateFixed, quote_amount: quoteAmount };
  }
}
