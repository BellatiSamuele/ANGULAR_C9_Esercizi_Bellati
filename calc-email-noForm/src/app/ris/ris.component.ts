import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ris',
  templateUrl: './ris.component.html',
  styleUrls: ['./ris.component.css']
})
export class RisComponent implements OnInit {

  constructor() { }

  @Input() tota: number;

  ngOnInit() {
  }

  email(mail:HTMLInputElement){
    console.log("il risultato è: ", this.tota);
  }

}
