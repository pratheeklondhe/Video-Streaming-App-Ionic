import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndividualGenrePageRoutingModule } from './individual-genre-routing.module';

import { IndividualGenrePage } from './individual-genre.page';
import { GenrePosterModule } from '../genre-poster/genre-poster.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndividualGenrePageRoutingModule,
    GenrePosterModule
  ],
  declarations: [IndividualGenrePage]
})
export class IndividualGenrePageModule {}
