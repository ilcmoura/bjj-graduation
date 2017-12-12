import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {NotFoundComponent} from './shared/not-found/not-found.component'
import {AthleteComponent} from './athlete/athlete.component'
import {AthleteProfileComponent} from './athlete/athlete-profile/athlete-profile.component'
import {AthleteCreateComponent} from './athlete/athlete-create/athlete-create.component'
import {TeamComponent} from './team/team.component'
import {TeamCreateComponent} from './team/team-create/team-create.component'

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'athlete', component: AthleteComponent},
  {path: 'athlete/create', component: AthleteCreateComponent},
  {path: 'athlete/:id', component: AthleteProfileComponent},
  {path: 'team', component: TeamComponent},
  {path: 'team/:id', component: TeamCreateComponent},
  {path: 'conduct', loadChildren: './conduct/conduct.module#ConductModule'},
  {path: 'about', loadChildren: './about/about.module#AboutModule'},
  {path: '**', component: NotFoundComponent}
]
