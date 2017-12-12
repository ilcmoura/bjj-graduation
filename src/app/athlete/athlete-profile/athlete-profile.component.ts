import { Component, OnInit } from '@angular/core';

import { AthleteService } from '../athlete.service';

import { Athlete } from '../athlete.model';

import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { Router , ActivatedRoute} from '@angular/router'

import 'rxjs/add/operator/do'


@Component({
  selector: 'bjj-athlete-profile',
  templateUrl: './athlete-profile.component.html'
})
export class AthleteProfileComponent implements OnInit {

  athlete: Athlete

  athleteId: number

  constructor(private athleteService: AthleteService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.athleteService.athleteById(this.route.snapshot.params['id']).subscribe(athlete => this.athlete = athlete)
  }

  update (athlete: Athlete) {
    this.athleteService.update(athlete)
      .do((athleteId: number) => {
        this.athleteId = athleteId
      })
      .subscribe( (athleteId ) => {
      this.router.navigate(['/athlete'])
    })
  }

}
