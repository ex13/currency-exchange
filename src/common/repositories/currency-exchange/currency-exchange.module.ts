import { Module, HttpModule } from '@nestjs/common';
import { CurrencyExchangeService } from './currency-exchange.service';

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [CurrencyExchangeService],
  exports: [CurrencyExchangeService],
})
export class CurrencyExchangeModule {}
