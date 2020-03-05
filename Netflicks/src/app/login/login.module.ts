import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { LoginServiceService } from './login-service.service';
import { headermodule } from '../header/header.module';
import { RegisterPageModule } from './register/register/register.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    headermodule,
    RegisterPageModule
  ],
  declarations: [LoginPage],
  providers: [LoginServiceService]
})
export class LoginPageModule {}
