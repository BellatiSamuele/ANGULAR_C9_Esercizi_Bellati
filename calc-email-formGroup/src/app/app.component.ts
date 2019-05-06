import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Numeri } from './numeri.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'calc-email-formGroup';

  myForm: FormGroup;
  numeri: Numeri;
  a: Numeri;
  b: Numeri;

  constructor (fb:FormBuilder){
    this.myForm = fb.group({
      'a': ['0', Validators.required],
      'b': ['0', Validators.required]
      });
  }

  onSum():boolean {
    if(this.myForm.invalid){
      console.log('errore');
      return false;
    }
    else
    {
      this.numeri = new Numeri();
      this.numeri.a = this.myForm.controls['a'];
      this.numeri.b = this.myForm.controls['b'];
      this.numeri.ris = this.numeri.a + this.numeri.b;
    }
  }
}

