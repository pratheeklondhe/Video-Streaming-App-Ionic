import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndividualGenrePageRoutingModule } from './individual-genre-routing.module';

import { IndividualGenrePage } from './individual-genre.page';
import { GenrePosterModule } from '../genre-poster/genre-poster.module';
import { GenreSliderModule } from '../genre-slider/genre-slider/genre-slider.module';
import { HomeService } from '../home/home.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndividualGenrePageRoutingModule,
    GenrePosterModule,
    GenreSliderModule
  ],
  providers: [HomeService],
  declarations: [IndividualGenrePage]
})
export class IndividualGenrePageModule {}
