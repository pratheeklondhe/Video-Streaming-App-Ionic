import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { GenreObj } from 'src/app/home/entity/initial-entity';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
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
              private modalController: ModalController,
              private alertController: AlertController,
              private toastController: ToastController) { }

  ngOnInit() {
    this.getCategoryList();
  }

  getGenre() {
    this.genreList = [];
    this.adminService.getGenreListByCategory({ selectedCategory: this.selectedCategory })
      .subscribe(data => {
        this.genreList = data as GenreObj[];
    });
  }

  getCategoryList() {
    this.categoryList = [];
    this.adminService.getCategories().subscribe(data => {
      this.categoryList = data as string[];
    }, error => {
      console.log('Error retreiving Category List');
    });
  }

  deleteConfirmation(genre: GenreObj) {
    this.presentAlertConfirm(`Are you sure to delete ${genre.title} ?.`, genre);
  }

  async presentModal(isEdit: boolean, genre?: GenreObj) {
    const modal = await this.modalController.create({
      component: GenreEditModalPage,
      componentProps: {
        genre,
        isEdit,
        categoryList: this.categoryList
      }
    });
    modal.onDidDismiss().then(() => {
      this.getGenre();
    });
    await modal.present();
  }

  async presentAlertConfirm(msg: string, genre: GenreObj) {
    const alert = await this.alertController.create({
      header: '<strong>Delete Confirmation!</strong>',
      message: msg,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelled');
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.deleteGenre(genre);
          }
        }
      ]
    });
    await alert.present();
  }

  deleteGenre(genre: GenreObj) {
    this.adminService.deleteGenre(genre.genreId, genre.genreTitle).subscribe(data => {
      const obj = data as any;
      const msg = obj && obj.message ? obj.message : 'Something went wrong during delete Genre';
      this.toastPresent(msg);
      this.getGenre();
    }, err => {
      console.log(err);
      this.toastPresent(err.message);
    });
  }

  async toastPresent(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      keyboardClose: true,
      mode: 'md'
    });
    toast.present();
  }

}
