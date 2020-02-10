import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginServiceService } from './login-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  baseUrl: string;

  constructor(private loginServiceService: LoginServiceService,
    private router: Router) {}



  onSubmit(loginForm: NgForm) {
    console.log(loginForm.form.value);
    this.loginServiceService.userLogin(loginForm.form.value).subscribe(data =>{
      this.storeUserToken(data);
      // this.test();
      this.router.navigate(['/home']);
    }, error => {
      loginForm.reset();
      this.loginServiceService.clearSessionStorage();
    });
  }

  storeUserToken(data) {
    this.loginServiceService.storeToken(data.headers.get('x-auth-token'));
  }

  test() {
    this.loginServiceService.test().subscribe(data => {

    })
  }

  ngOnInit() {
  }

  setUrl() {
    window.localStorage.removeItem('baseUrl');
    window.localStorage.setItem('baseUrl', this.baseUrl);
  }

  clearUrl() {
    window.localStorage.removeItem('baseUrl');
  }

}
