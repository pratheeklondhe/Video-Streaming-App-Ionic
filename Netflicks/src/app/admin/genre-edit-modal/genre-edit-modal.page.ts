import { Component, OnInit, Input } from '@angular/core';
import { GenreObj, GenreFile } from 'src/app/home/entity/initial-entity';
import { ModalController, AlertController } from '@ionic/angular';
import { AdminService } from '../admin.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-genre-edit-modal',
  templateUrl: './genre-edit-modal.page.html',
  styleUrls: ['./genre-edit-modal.page.scss'],
})
export class GenreEditModalPage implements OnInit {

  @Input() genre: GenreObj;
  genreObj: GenreFile = new GenreFile();

  constructor(private modalController: ModalController,
    private adminService: AdminService, private alertController: AlertController) { }

  ngOnInit() { 
    this.getGenre();
  }

  getGenre() {
    this.genreObj = new GenreFile();
    this.adminService.getGenreByGenreId(this.genre.genreId).subscribe(data => {
      this.genreObj = data as GenreFile;
      console.log(this.genreObj);
    }, error => {
      console.log('Genre Not Found');
    });
  }

  modalDismiss() {
    this.modalController.dismiss();
  }

  onSubmit(genreForm: NgForm) {
    this.presentAlertConfirm();
    console.log(this.genreObj);
  }

  
  updateGenre() {
    delete this.genreObj._id;
    delete this.genreObj['__v'];
    this.adminService.updateGenreByGenreId(this.genreObj).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    })
  }
  
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Alert!',
      message: `Are You Sure To Update <strong>${this.genre.title}</strong>?`,
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
            this.updateGenre();
          }
        }
      ]
    });
    await alert.present();
  }
}
