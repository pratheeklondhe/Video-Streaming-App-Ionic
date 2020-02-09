import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenrePosterComponent } from './genre-poster.component';
import { IonicModule } from '@ionic/angular';
import { GenreDashboardComponent } from './genre-dashboard/genre-dashboard.component';



@NgModule({
  declarations: [GenrePosterComponent, GenreDashboardComponent],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [GenrePosterComponent, GenreDashboardComponent]
})
export class GenrePosterModule { }
