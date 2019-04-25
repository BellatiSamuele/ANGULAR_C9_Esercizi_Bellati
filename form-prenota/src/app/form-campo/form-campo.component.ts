import { Component, OnInit } from '@angular/core';

import {
 FormBuilder,
 FormGroup,
 Validators,
} from '@angular/forms';

@Component({
 selector: 'app-form-campo',
 templateUrl: './form-campo.component.html',
 styleUrls: ['./form-campo.component.css']
})
export class FormCampoComponent implements OnInit {
 myForm: FormGroup;
 constructor(fb: FormBuilder) {
   this.myForm = fb.group({
     'nome': ['ABC123', Validators.required],
     'cognome': ['ABC123', Validators.required],
     'indirizzo': ['ABC123', Validators.required],
     'tel': ['ABC123', Validators.required],
     'email': ['ABC123', Validators.required],
     'data': ['ABC123', Validators.required],
     'ora': ['ABC123', Validators.required]
   });
 }
 ngOnInit() {
 }

 onSubmit(value: string): void {
   console.log('valori inseriti: ', value);
 }

}
