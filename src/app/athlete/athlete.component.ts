import { Component, OnInit, Input } from '@angular/core';

import { Athlete } from './athlete.model';

import { AthleteService } from './athlete.service';

import * as $ from 'jquery';
import 'datatables.net'

@Component({
  selector: 'bjj-athlete',
  templateUrl: './athlete.component.html'
})
export class AthleteComponent implements OnInit {

  @Input() athlete :Athlete

  athletes : Athlete [] = []

  constructor(private athletesService: AthleteService) { }

  ngOnInit() {
    this.athletesService.athletes()
      .subscribe(athletes => this.athletes = athletes)
  }

  delete (athlete: Athlete) {
    this.athletesService.delete(athlete.id)
      .subscribe(
          ()=>{
              this.athletes.splice(this.athletes.indexOf(athlete),1)
          }
      )
  }

}
