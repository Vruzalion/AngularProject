export interface ExchangeRatesResponse {
  rates: {
    [key: string]: number;
  },
  base_code: string,
  date: string
}
