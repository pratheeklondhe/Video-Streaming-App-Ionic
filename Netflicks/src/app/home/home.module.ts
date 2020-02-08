import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { headermodule } from '../header/header.module';
import { HomeService } from './home.service';
import { GenreSliderModule } from '../genre-slider/genre-slider/genre-slider.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    headermodule,
    GenreSliderModule
  ],
  declarations: [HomePage],
  providers: [HomeService]
})
export class HomePageModule {}
