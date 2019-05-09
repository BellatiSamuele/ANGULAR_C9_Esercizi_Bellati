import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ris',
  templateUrl: './ris.component.html',
  styleUrls: ['./ris.component.css']
})
export class RisComponent implements OnInit {

  @Input() risultato: number;
  myForm: FormGroup;

   constructor(fb: FormBuilder) {
    this.myForm = fb.group({'email': ['example@email.com', Validators.email]
    });
  }

  ngOnInit() {
  }

  onSubmit(value: string){
    if(this.myForm.valid) {
      console.log('Mail inviata a: ' + this.myForm.controls['email'].value);
    }
    else {
      console.log('Non hai inserito una mail valida');
    }
  }

}
