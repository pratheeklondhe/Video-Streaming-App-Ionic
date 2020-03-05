import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutPageRoutingModule } from './about-routing.module';

import { AboutPage } from './about.page';
import { headermodule } from '../../header/header.module';
import { AboutService } from '../about.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutPageRoutingModule,
    headermodule
  ],
  declarations: [AboutPage],
  providers: [AboutService]
})
export class AboutPageModule {}
