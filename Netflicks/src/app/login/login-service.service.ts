import { Injectable } from '@angular/core';
import { DataService } from '../data.service' 
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private dataService: DataService){}

  userLogin(obj) {
    return this.dataService.rest_post('userauthentication/auth', obj);
  }

  storeToken(token: string){
    window.sessionStorage.setItem('x-auth-token', token);
  }

  clearSessionStorage(){
    window.sessionStorage.clear();
  }

  // sampleget() {
  //   const obj = {
  //     email: "pratheek@gmail.com",
  //     password: "123"
  //   }
  //   console.log(`In login service`);
  //   this.dataService.rest_post('userauthentication/auth', obj).subscribe(data => {

  //     alert(data)
  //   })
  // }
}
