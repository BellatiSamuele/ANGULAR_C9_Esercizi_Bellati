import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calc-email';

  tot: number = 0;
  numero: number = 0;
  i: number = 0;


  somma(tot: HTMLInputElement){
    let totInt = Number(tot.value);
    this.numero = this.numero + totInt;
    this.i++;
    console.log(this.numero);
    return false;
  }

  sottrazione(tot: HTMLInputElement){
    let totInt = Number(tot.value);
    this.numero = this.numero - totInt;
    this.i++;
    console.log(this.numero);
    return false;
  }

  moltiplicaz(tot: HTMLInputElement){
    let totInt = Number(tot.value);
    this.numero = this.numero * totInt;
    this.i++;
    console.log(this.numero);
    return false;
  }

  divisione(tot: HTMLInputElement){
    let totInt = Number(tot.value);
    this.numero = this.numero / totInt;
    this.i++;
    console.log(this.numero);
    return false;
  }

}
