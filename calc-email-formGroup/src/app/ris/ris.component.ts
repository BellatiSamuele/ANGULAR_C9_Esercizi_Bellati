import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ris',
  templateUrl: './ris.component.html',
  styleUrls: ['./ris.component.css']
})
export class RisComponent implements OnInit {

  @Input() n : number;
   
  myForm: FormGroup;
   
  constructor(fb: FormBuilder) { }

  onSubmit(){
    console.log('email: ' );
  }

  ngOnInit() {
  }

}
