import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calc-email';

  tot: number = 0;

  somma(num1: HTMLInputElement, num2: HTMLInputElement){
    let numero1 = Number(num1.value);
    let numero2 = Number(num2.value);
    this.tot = numero1 + numero2;
    console.log(this.tot);
    return false;
  }

  sottrazione(num1: HTMLInputElement, num2: HTMLInputElement){
    let numero1 = Number(num1.value);
    let numero2 = Number(num2.value);
    this.tot = numero1 - numero2;
    console.log(this.tot);
    return false;
  }

  moltiplicaz(num1: HTMLInputElement, num2: HTMLInputElement){
    let numero1 = Number(num1.value);
    let numero2 = Number(num2.value);
    this.tot = numero1 * numero2;
    console.log(this.tot);
    return false;
  }

  divisione(num1: HTMLInputElement, num2: HTMLInputElement){
    let numero1 = Number(num1.value);
    let numero2 = Number(num2.value);
    this.tot = numero1 / numero2;
    console.log(this.tot);
    return false;
  }

}
