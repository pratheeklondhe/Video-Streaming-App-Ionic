import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreSliderComponent } from './genre-slider.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [GenreSliderComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [GenreSliderComponent]
})
export class GenreSliderModule { }
