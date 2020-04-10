import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginServiceService } from './login-service.service';
import { Router } from '@angular/router';
import { Events, ModalController, ToastController } from '@ionic/angular';
import { RegisterPage } from './register/register/register.page';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  baseUrl: string;
  isLoader = false;

  constructor(private loginServiceService: LoginServiceService,
    private router: Router, private event: Events,
    private modalController: ModalController, private toastController: ToastController) { }



  onSubmit(loginForm: NgForm) {
    this.isLoader = true;
    this.loginServiceService.userLogin(loginForm.form.value).subscribe(data => {
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

      this.toastPreset('Invalid Credentials. Please Try Again');
      // loginForm.reset();
      this.loginServiceService.clearSessionStorage();
      this.isLoader = false;
    });
  }

  publishEvent(role: string) {
    this.event.publish('role', { role });
  }

  ionViewWillEnter() {
    this.isLoader = false;
  }

  storeUserToken(data) {
    this.loginServiceService.storeToken(data.headers.get('x-auth-token'));
  }

  test() {
    this.loginServiceService.test().subscribe(data => {

    });
  }

  async toastPreset(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      keyboardClose: true,
      mode: 'md'
    });
    toast.present();
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

  ionViewDidLeave() {
    // console.log('Did Leave Login page');
  }

  async registerModal() {
    const modal = await this.modalController.create({
      component: RegisterPage,
      mode: "ios",
      keyboardClose: true,
      // delegate      
      // swipe-to-close: true
    });
    // modal.addEventListener('ionModalWillPresent', () => {
    //   console.log('Hey mahn');
    // });
    await modal.present();

  }

}
