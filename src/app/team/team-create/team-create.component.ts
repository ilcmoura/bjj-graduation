import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router'

import { Team } from '../team.model'
import { TeamService } from '../team.service'

import 'rxjs/add/operator/do'

@Component({
  selector: 'bjj-team-create',
  templateUrl: './team-create.component.html'
})
export class TeamCreateComponent implements OnInit {

  teamForm: FormGroup

  teamId: number

  team: Team

  constructor(private teamService : TeamService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.teamForm = this.formBuilder.group({
        id: this.formBuilder.control('', [Validators.required]),
        name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
        master: this.formBuilder.control('', [Validators.required]),
        teacher:this.formBuilder.control('', [Validators.required])
      })

      if (this.route.snapshot.params['id'] !== 'create') {
        this.teamService.teamById(this.route.snapshot.params['id']).subscribe(team => this.team = team)
      }
  }

  save(team: Team) {
    if (team.id === undefined)
      this.insert(team)
    else
      this.update(team)
  }

  insert (team: Team) {
    this.teamService.insert(team)
      .do((teamId: number) => {
        this.teamId = teamId
      })
      .subscribe( (teamId ) => {
      this.router.navigate(['/team'])
    })
  }

  update (team: Team) {
    this.teamService.update(team)
      .do((teamId: number) => {
        this.teamId = teamId
      })
      .subscribe( (teamId ) => {
      this.router.navigate(['/team'])
    })
  }

}
