import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginServiceService } from '../login/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private loginService: LoginServiceService,
    private router: Router) {}

  canActivate(): boolean {
    if(!!this.loginService.retrieveToken()) {
      console.log('AuthGuard Success');
      return true;
    } else {
      console.log('AuthGuard Denied');
      this.router.navigateByUrl('');
      return false;
    }
  }
}
