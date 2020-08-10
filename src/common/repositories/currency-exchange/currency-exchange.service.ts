import {
  Injectable,
  HttpService,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { ExchangeRateResponseDto } from './dto/exchange-rate-response.dto';
import { MESSAGES } from '../../constants/messages';
import { EXCHANGE_API_HOST } from './constants/api-host';

@Injectable()
export class CurrencyExchangeService {
  constructor(private httpService: HttpService) {}

  async getExchangeRate(
    baseCurrency: string,
    quoteCurrency: string
  ): Promise<number> {
    const exchangeResponse = await this.httpService
      .get<ExchangeRateResponseDto>(
        `${EXCHANGE_API_HOST}?base=${baseCurrency}&symbols=${quoteCurrency}`
      )
      .toPromise()
      .then(response => response.data)
      .catch(error => {
        throw new error();
      });

    if (!exchangeResponse.rates || !exchangeResponse.rates[quoteCurrency]) {
      throw new HttpException(
        MESSAGES.ERROR.QUOTE_CURRENCY_NOT_FOUND,
        HttpStatus.NOT_FOUND
      );
    }

    return Number.parseFloat(exchangeResponse.rates[quoteCurrency]);
  }
}
