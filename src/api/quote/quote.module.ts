import { Module } from '@nestjs/common';
import { QuoteController } from './quote.controller';
import { QuoteService } from './quote.service';
import { CurrencyExchangeModule } from '../../common/repositories/currency-exchange/currency-exchange.module';

@Module({
  imports: [CurrencyExchangeModule],
  controllers: [QuoteController],
  providers: [QuoteService],
})
export class QuoteModule {}
