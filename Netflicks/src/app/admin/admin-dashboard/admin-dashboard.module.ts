import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminDashboardPageRoutingModule } from './admin-dashboard-routing.module';

import { AdminDashboardPage } from './admin-dashboard.page';
import { headermodule } from 'src/app/header/header.module';
import { AdminService } from '../admin.service';
import { GenreEditModalPageModule } from '../genre-edit-modal/genre-edit-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminDashboardPageRoutingModule,
    headermodule,
    GenreEditModalPageModule
  ],
  declarations: [AdminDashboardPage],
  providers: [AdminService]
})
export class AdminDashboardPageModule {}
