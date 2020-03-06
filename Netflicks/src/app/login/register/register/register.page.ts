import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { LoginServiceService } from '../../login-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  isLoader = false;

  constructor(private modalController: ModalController,
    private loginServiceService: LoginServiceService,
    private toastController: ToastController) { }

  ngOnInit() {
  }

  modalDismiss() {
    this.modalController.dismiss();
  }

  ionViewWillEnter() {
    this.isLoader = false;
  }

  onSubmit(regForm: NgForm) {
    this.isLoader = true;
    this.loginServiceService.registerUser(regForm.form.value).subscribe(data => {
      this.toastPreset('Registered Successfully', true);
    }, error => {
      this.toastPreset('Something went wrong.Try again.', false);
      // console.log(error);
      this.isLoader = false;
    });
  }

  async toastPreset(msg: string, isDismiss: boolean) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
    toast.onWillDismiss().then(() => {
      if (isDismiss) {
        this.modalDismiss();
      }
    });
  }

}
