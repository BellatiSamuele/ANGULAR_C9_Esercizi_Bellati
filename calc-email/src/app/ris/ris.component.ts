import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ris',
  templateUrl: './ris.component.html',
  styleUrls: ['./ris.component.css']
})
export class RisComponent implements OnInit {

  constructor() { }

  @Input() numero: number;
  @Input() i: number;

  ngOnInit() {
  }

}
