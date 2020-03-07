import { Component, ViewChild } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { NgForm, FormGroup } from '@angular/forms';
import { LoginServiceService } from '../../login-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {

  @ViewChild('regForm', { static: true})regFormComp: NgForm = new NgForm([], []);

  isLoader = false;

  constructor(private modalController: ModalController,
    private loginServiceService: LoginServiceService,
    private toastController: ToastController) { }

  modalDismiss() {
    this.modalController.dismiss();
  }

  ionViewDidEnter() {
    this.regFormComp.reset();
    this.isLoader = false;
  }

  onSubmit(regForm: NgForm) {
    this.isLoader = true;
    this.loginServiceService.registerUser(regForm.form.value).subscribe(data => {
      this.toastPreset('Registered Successfully', true);
    }, error => {
      console.log(error);
      this.toastPreset(error.error.message, false);
      this.isLoader = false;
    });
  }

  async toastPreset(msg: string, isDismiss: boolean) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      keyboardClose: true,
      mode: "md"
    });
    toast.present();
    toast.onWillDismiss().then(() => {
      if (isDismiss) {
        this.modalDismiss();
      }
    });
  }

}
