import {Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'

import {Observable} from 'rxjs/Observable'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { Athlete } from './athlete.model'

import {MEAT_API} from '../app.api'

@Injectable()
export class AthleteService {

  constructor(private http: HttpClient){}

  athletes(search?: string): Observable<Athlete[]> {
    let params: HttpParams = undefined
    if(search){
      params = new HttpParams().set('q', search)
    }
    return this.http.get<Athlete[]>(`${MEAT_API}/athletes`, {params:params})
  }

  athleteById(id: string): Observable<Athlete> {
    return this.http.get<Athlete>(`${MEAT_API}/athletes/${id}`)
  }

  insert(order: Athlete): Observable<number>{
    return this.http.post<Athlete>(`${MEAT_API}/athletes`, order)
      .map(order => order.id)
  }

  update(order: Athlete): Observable<number>{
    return this.http.put<Athlete>(`${MEAT_API}/athletes`, order)
      .map(order => order.id)
  }

  delete(id: number): Observable<any>{
    return this.http.delete<any>(`${MEAT_API}/athletes/${id}`)
  }
}
