import { Injectable } from '@angular/core';
import { DataService } from '../data.service' 
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private dataService: DataService){}

  userLogin(obj) {
    return this.dataService.rest_post_with_headers('userauthentication/auth', obj);
  }

  storeToken(token: string){
    window.sessionStorage.setItem('x-auth-token', token);
  }

  retrieveToken() {
    return window.sessionStorage.getItem('x-auth-token');
  }

  test() {
    return this.dataService.rest_post('usercreation/registersimple', {});
  }

  clearSessionStorage(){
    window.sessionStorage.clear();
  }

  reportLogin() {
    return this.dataService.rest_put('session/login', {});
  }
}
