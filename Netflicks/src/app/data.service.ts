import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from './configurations/config';
import { LoaderService } from './utilities/loader.service';


import { finalize } from 'rxjs/operators';
import { LoginServiceService } from './login/login-service.service';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient,
            // private loginService: LoginServiceService,
           private loaderService: LoaderService) { }

  rest_get(url: string, params?: HttpParams): Observable<Object> {
    return this.http.get(this.getBaseUrl() + url, this.returnHeaders(params));
  }

  rest_post_with_headers(url: string, body): Observable<Object> {
    // console.log(this.getBaseUrl() + " dhsjahdksahkdhsa");
    // let loader = this.loaderService.createBasicLoader().then(() => {});

    // loader.then((res) => res.present())
    // (async function(){ await (await loader).present()})();
    return this.http.post(this.getBaseUrl() + url, body, {observe: 'response'});

          // .pipe(finalize(() => {
          //   loader.dismiss();
          // }));  
  }

  rest_post(url: string, body: any): Observable<Object> {
    return this.http.post(this.getBaseUrl() + url, body, this.returnHeaders());
  }

  rest_put(url: string, body: any): Observable<Object> {
    return this.http.put(this.getBaseUrl() + url, body, this.returnHeaders());
  }

  returnHeaders(params?: HttpParams) {
    return ({
      headers: new HttpHeaders({'x-auth-token': window.sessionStorage.getItem('x-auth-token')}),
      params: params
    });
  }

  getBaseUrl(): string {
    let baseUrl = window.localStorage.getItem('baseUrl');
    baseUrl = baseUrl ? baseUrl : 'http://localhost:3000/api/';
    // return baseUrl;
    return 'https://fast-wildwood-48042.herokuapp.com/api/';
  }

  rest_get_mp4(url) {
    const header = {
      headers: new HttpHeaders({'Content-Type': 'video/mp4'}),
      
    }
    return this.http.get(this.getBaseUrl() + url, {responseType: 'text'});
  }


  rest_mulipart_form(url: string, payload: any, options: any) {
    return this.http.post(this.getBaseUrl() + url, payload);
  }

}