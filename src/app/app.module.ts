import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common'
import { RouterModule, PreloadAllModules } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ROUTES } from './app.routes'

import { AppComponent } from './app.component';
import { AthleteComponent } from './athlete/athlete.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { TopComponent } from './shared/top/top.component';
import { AthleteProfileComponent } from './athlete/athlete-profile/athlete-profile.component';

import { AthleteService } from './athlete/athlete.service';
import { TeamService } from './team/team.service';

import { AthleteCreateComponent } from './athlete/athlete-create/athlete-create.component';
import { InputComponent } from './shared/input/input.component';
import { TeamComponent } from './team/team.component';
import { TeamCreateComponent } from './team/team-create/team-create.component';

@NgModule({
  declarations: [
    AppComponent,
    AthleteComponent,
    HeaderComponent,
    NotFoundComponent,
    HomeComponent,
    TopComponent,
    AthleteProfileComponent,
    AthleteCreateComponent,
    InputComponent,
    TeamComponent,
    TeamCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
              {provide: LocationStrategy, useClass: HashLocationStrategy},
              {provide: LOCALE_ID, useValue: 'pt-BR'},
              AthleteService,
              TeamService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
