import {Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'

import {Observable} from 'rxjs/Observable'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { Team } from './team.model'

import {MEAT_API} from '../app.api'

@Injectable()
export class TeamService {

  constructor(private http: HttpClient){}

  teams(search?: string): Observable<Team[]> {
    let params: HttpParams = undefined
    if(search){
      params = new HttpParams().set('q', search)
    }
    return this.http.get<Team[]>(`${MEAT_API}/teams`, {params:params})
  }

  teamById(id: string): Observable<Team> {
    return this.http.get<Team>(`${MEAT_API}/teams/${id}`)
  }

  insert(order: Team): Observable<number>{
    return this.http.post<Team>(`${MEAT_API}/teams`, order)
      .map(order => order.id)
  }

  update(order: Team): Observable<number>{
    return this.http.put<Team>(`${MEAT_API}/teams`, order)
      .map(order => order.id)
  }

  delete(id: number): Observable<any>{
    return this.http.delete<any>(`${MEAT_API}/teams/${id}`)
  }
}
