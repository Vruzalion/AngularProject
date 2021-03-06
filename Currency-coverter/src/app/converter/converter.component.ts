import { Component, OnInit } from '@angular/core';
import { CurrencyExchangeRatesService  } from '../services/exchange-rates.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  amount: number = 1;
  from = 'EUR';
  to = 'USD';
  rates!: { [key: string]: number; };

  convert(): number{
    return this.amount * this.rates[this.to];
  }

  loadRates() {
 this.service.getRates(this.from).subscribe(res => this.rates = res.rates);
  }

  getAllCurrencies(): string[] {
    return Object.keys(this.rates);
  }

  constructor(private service: CurrencyExchangeRatesService ) {


  }

 ngOnInit(): void {
    this.loadRates();
  }

   }



