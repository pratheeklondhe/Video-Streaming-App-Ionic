import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { GenreObj } from 'src/app/home/entity/initial-entity';
import { ModalController } from '@ionic/angular';
import { GenreEditModalPage } from '../genre-edit-modal/genre-edit-modal.page';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {
  categoryList: string[] = [];
  selectedCategory: string[] = [];
  genreList: GenreObj[] = [];

  constructor(private adminService: AdminService,
    private modalController: ModalController) { }

  ngOnInit() { 
    this.getCategoryList();
  }

  getGenre() {
    this.genreList = [];
    this.adminService.getGenreListByCategory({ selectedCategory: this.selectedCategory })
      .subscribe(data => {
        this.genreList = <GenreObj[]>data;
    });
  }

  getCategoryList() {
    this.categoryList = [];
    this.adminService.getCategories().subscribe(data => {
      this.categoryList = <string[]>data;
    }, error => {
      console.log('Error retreiving Category List');
    })
  }

  async presentModal(genre: GenreObj) {
    const modal = await this.modalController.create({
      component: GenreEditModalPage,
      componentProps: {
        genre: genre
      }
    });
    await modal.present();
  }



}
