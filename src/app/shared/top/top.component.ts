import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bjj-top',
  templateUrl: './top.component.html'
})
export class TopComponent implements OnInit {

  @Input() title: string = ''
  @Input() subtitle:string = ''

  constructor() { }

  ngOnInit() {
  }

}
