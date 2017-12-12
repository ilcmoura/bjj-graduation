import { Component, OnInit, Input} from '@angular/core';

import { Team } from './team.model';

import { TeamService } from './team.service';

import * as $ from 'jquery';
import 'datatables.net'

@Component({
  selector: 'bjj-team',
  templateUrl: './team.component.html'
})
export class TeamComponent implements OnInit {

    @Input() team :Team

    teams : Team [] = []

    constructor(private teamsService: TeamService) { }

    ngOnInit() {
      this.teamsService.teams()
        .subscribe(teams => this.teams = teams)
    }

    delete (team: Team) {
      this.teamsService.delete(team.id)
        .subscribe(
            ()=>{
                this.teams.splice(this.teams.indexOf(team),1)
            }
        )
    }
}
