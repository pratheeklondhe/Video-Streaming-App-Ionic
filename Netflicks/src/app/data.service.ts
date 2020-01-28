import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from './configurations/config';
import { LoaderService } from './utilities/loader.service';


import { finalize } from 'rxjs/operators';
import { LoginServiceService } from './login/login-service.service';



const base_url = Config.base_url;
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient,
            // private loginService: LoginServiceService,
           private loaderService: LoaderService) { }

  rest_get(url: string): Observable<Object> {
    return this.http.get(base_url + url);
  }

  rest_post_with_headers(url: string, body): Observable<Object> {
    // let loader = this.loaderService.createBasicLoader().then(() => {});

    // loader.then((res) => res.present())
    // (async function(){ await (await loader).present()})();
    return this.http.post(base_url + url, body, {observe: 'response'});

          // .pipe(finalize(() => {
          //   loader.dismiss();
          // }));  
  }

  rest_post(url: string, body: any): Observable<Object> {
    return this.http.post(base_url + url, body, this.returnHeaders());
  }

  returnHeaders() {
    return ({
      headers: new HttpHeaders({'x-auth-token': window.sessionStorage.getItem('x-auth-token')})
    });
  }

}