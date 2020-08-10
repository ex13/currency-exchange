import { Module } from '@nestjs/common';
import { QuoteModule } from './quote/quote.module';
import { HealthController } from './health.controller';

@Module({
  imports: [QuoteModule],
  controllers: [HealthController],
  providers: [],
})
export class ApiModule {}
