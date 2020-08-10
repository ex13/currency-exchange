export class ExchangeRateResponseDto {
  rates: {
    USD: number | null;
    EUR: number | null;
    GBP: number | null;
    ILS: number | null;
  };
  base: string;
  date: string;
}
