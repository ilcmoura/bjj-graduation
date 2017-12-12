import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { Router } from '@angular/router'

import { Athlete } from '../athlete.model'
import { AthleteService } from '../athlete.service'

import 'rxjs/add/operator/do'

@Component({
  selector: 'bjj-athlete-create',
  templateUrl: './athlete-create.component.html'
})
export class AthleteCreateComponent implements OnInit {

  athleteForm: FormGroup

  athleteId: number

  constructor(private athleteService : AthleteService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.athleteForm = this.formBuilder.group({
        id: this.formBuilder.control('', [Validators.required]),
        name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
        birthday: this.formBuilder.control(''),
        graduation: this.formBuilder.control('')
      })
  }

  insert (athlete: Athlete) {
    this.athleteService.insert(athlete)
      .do((athleteId: number) => {
        this.athleteId = athleteId
      })
      .subscribe( (athleteId ) => {
      this.router.navigate(['/athlete'])
    })
  }

}
