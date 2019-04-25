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
     'nome': ['a', Validators.required],
     'cognome': ['b', Validators.required],
     'indirizzo': ['c', Validators.required],
     'tel': ['1', Validators.required],
     'email': ['d', Validators.required],
     'data': ['2/3/4', Validators.required],
     'ora': ['5', Validators.required]
   });
 }
 ngOnInit() {
 }

 onSubmit(value: string): void {
   console.log('valori inseriti: ', value);
 }

}
