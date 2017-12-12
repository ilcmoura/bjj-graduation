import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router'

import { ConductComponent } from './conduct.component';

const ROUTES: Routes = [
  {path:'', component: ConductComponent}
]

@NgModule({
  declarations: [ConductComponent],
  imports: [RouterModule, RouterModule.forChild(ROUTES)]
})
export class ConductModule {}
