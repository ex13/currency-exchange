import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class CurrencyExchangeServiceMock {
  constructor(private httpService: HttpService) {}

  async getExchangeRate(): Promise<number> {
    return 100;
  }
}
