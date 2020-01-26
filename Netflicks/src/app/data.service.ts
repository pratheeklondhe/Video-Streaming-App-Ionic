import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from './configurations/config';

const base_url = Config.base_url;
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  rest_get(url: string): Observable<Object> {
    return this.http.get(base_url + url);
  }

  rest_post(url: string, body): Observable<Object> {
    return this.http.post(base_url + url, body, {observe: 'response'});
  }
}