import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ExchangeRatesResponse } from './payloads/exchange-rates-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangeRatesService {

  constructor(private httpClient: HttpClient) { }

  getRates(base: string): Observable<ExchangeRatesResponse> {
    return this.httpClient.get<ExchangeRatesResponse>(`http://api.exchangeratesapi.io/v1/latest?access_key=c64e634cb40dccca3ea8e9cf3a834927&base=${base}`);
}

}
