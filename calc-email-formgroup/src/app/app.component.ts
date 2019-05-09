import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calc-email-formgroup';

  myForm : FormGroup;
  a:number;
  b:number;
  risultato: number;

  constructor(fb : FormBuilder){
    this.myForm = fb.group ({'a': ['0', Validators.required], 'b': ['0', Validators.required]});
  }

  sum(){
    if(this.myForm.valid) {
    this.a = Number(this.myForm.controls['a'].value);
    this.b = Number(this.myForm.controls['b'].value);
    this.risultato = Number(this.myForm.controls['a'].value) + Number(this.myForm.controls['b'].value);
    return false;
    }
  }

    sott(){
    if(this.myForm.valid) {
    this.a = Number(this.myForm.controls['a'].value);
    this.b = Number(this.myForm.controls['b'].value);
    this.risultato = Number(this.myForm.controls['a'].value) - Number(this.myForm.controls['b'].value);
    return false;
    }
  }

    molt(){
    if(this.myForm.valid) {
    this.a = Number(this.myForm.controls['a'].value);
    this.b = Number(this.myForm.controls['b'].value);
    this.risultato = Number(this.myForm.controls['a'].value) * Number(this.myForm.controls['b'].value);
    return false;
    }
  }

    divis(){
    if(this.myForm.valid) {
    this.a = Number(this.myForm.controls['a'].value);
    this.b = Number(this.myForm.controls['b'].value);
    this.risultato = Number(this.myForm.controls['a'].value) / Number(this.myForm.controls['b'].value);
    return false;
    }
  }
}
