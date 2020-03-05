import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginServiceService } from './login-service.service';
import { Router } from '@angular/router';
import { Events } from '@ionic/angular';

      
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  baseUrl: string;
  isLoader = false;

  constructor(private loginServiceService: LoginServiceService,
    private router: Router, private event: Events) {}



  onSubmit(loginForm: NgForm) {
    this.isLoader = true;
    this.loginServiceService.userLogin(loginForm.form.value).subscribe(data =>{
      this.storeUserToken(data);
      if (data && data['body']['role'] === 'USER') {
        this.reportLogin();
        this.publishEvent('USER');
        this.router.navigate(['/home']);
      } else if (data && data['body']['role'] === 'ADMIN') {
        this.publishEvent('ADMIN');
        this.router.navigate(['/admin']);
      }
    }, error => {
      loginForm.reset();
      this.loginServiceService.clearSessionStorage();
      this.isLoader = false;
    });
  }

  publishEvent(role: string) {
    this.event.publish('role', {role});
  }

  ionViewWillEnter() {
    this.isLoader = false;
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

  reportLogin() {
    this.loginServiceService.reportLogin().subscribe();
  }

}
