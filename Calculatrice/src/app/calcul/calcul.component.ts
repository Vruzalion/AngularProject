import { Component } from '@angular/core';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent {

  public a = 0;
  public b = 0;
  public c = 0;

  add() {
    this.c = this.a + this.b
  }
   sub() {
    this.c = this.a - this.b
   }
   div() {
    this.c = this.a / this.b
   }
   mul() {
    this.c = this.a * this.b
  }

}
