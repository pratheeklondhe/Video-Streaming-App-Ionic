import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenreEditModalPageRoutingModule } from './genre-edit-modal-routing.module';

import { GenreEditModalPage } from './genre-edit-modal.page';
import { AdminService } from '../admin.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenreEditModalPageRoutingModule
  ],
  declarations: [GenreEditModalPage],
  providers: [AdminService]
})
export class GenreEditModalPageModule {}
