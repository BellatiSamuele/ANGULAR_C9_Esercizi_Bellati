import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'calc-email-formGroup';

   myForm: FormGroup;
   ris: number;
   a: number;
   b: number;

  constructor (fb: FormBuilder){
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
      this.a = Number(this.myForm.controls['a'].value);
      this.b = Number(this.myForm.controls['b'].value);
      this.ris = Number(this.myForm.controls['a'].value) + Number(this.myForm.controls['a'].value);
    }
  }
}

