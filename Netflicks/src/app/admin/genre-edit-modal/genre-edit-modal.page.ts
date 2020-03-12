import { Component, OnInit, Input } from '@angular/core';
import { GenreObj, GenreFile } from 'src/app/home/entity/initial-entity';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { AdminService } from '../admin.service';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-genre-edit-modal',
  templateUrl: './genre-edit-modal.page.html',
  styleUrls: ['./genre-edit-modal.page.scss'],
})
export class GenreEditModalPage implements OnInit {

  @Input() genre: GenreObj;
  @Input() isEdit: boolean;
  @Input() categoryList: string[] = [];

  SERVER_URL = 'http://localhost:3000/api/genre/uploadgenre';
  languages = ['English', 'Hindi', 'Kannada'];
  genreObj: GenreFile = new GenreFile();
  uploadForm: FormGroup;
  selectedFile = null;


  constructor(private modalController: ModalController, private adminService: AdminService,
              private alertController: AlertController, private toastController: ToastController) { }

  ngOnInit() {
    if (this.isEdit) {
      this.getGenre();
    }
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
    if (this.isEdit) {
      this.presentAlertConfirm(`Are You Sure To Update <strong>${this.genre.title}</strong>?`);
    } else {
      this.presentAlertConfirm(`Are You Sure To Add New Genre?`);
    }
    console.log(this.genreObj);
  }


  updateGenre() {
    this.deleteUnwantedProps();
    this.adminService.updateGenreByGenreId(this.genreObj).subscribe(data => {
      console.log(data);
      const msg = data ? 'Updated Genre Successfully' : 'Something Went Wrong while updating genre. Try Again.';
      this.toastPresent(msg);
      this.modalDismiss();
    }, error => {
      this.toastPresent(error.message);
      console.log(error);
    });
  }

  async presentAlertConfirm(msg: string) {
    const alert = await this.alertController.create({
      header: 'Alert!',
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
            if (this.isEdit) {
              this.updateGenre();
            } else {
              this.addGenre();
            }
          }
        }
      ]
    });
    await alert.present();
  }

  addGenre() {
    this.deleteUnwantedProps();
    this.genreObj.isSeries = false;
    console.log(this.genreObj);
    this.adminService.addGenre(this.genreObj).subscribe(data => {
      this.postGenreCreationTasks(data);
      this.onSubmitVideo();
    }, error => {
      alert('Failure ' + error.message);
      this.toastPresent(error.message);
    });
  }




  private postGenreCreationTasks(data: any) {
    const ret = data as any;
    const msg = ret ? 'Genre Saved Successfully' : 'Something Went Wrong in adding Genre. No Response msg received from server! Strange';
    this.toastPresent(msg + ' .Initiating File Upload.');
  }

  onFileSelect(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  async onSubmitVideo() {
    const payload = new FormData();
    payload.append('genrevideo', this.selectedFile, this.selectedFile.name);

    const options = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };
    const toast = await this.presentToastWithOptions('Uploading Genre Video....');
    toast.present();
    this.adminService.uploadFlie(payload, options).subscribe(data => {
      this.conveyUser(toast, data);
    }, err => {
      this.conveyUser(toast, err);
    });
  }


  private conveyUser(toast: HTMLIonToastElement, data: any) {
    toast.dismiss();
    const msg = data && data.message ? data.message : 'Something Went Wrong In Genre Upload.';
    setTimeout(() => {
      this.toastPresent(msg);
      setTimeout(() => {
        this.selectedFile = null;
        this.modalDismiss();
      }, 500);
    }, 500);
  }

  deleteUnwantedProps() {
    delete this.genreObj._id;
    delete this.genreObj['__v'];
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

    async presentToastWithOptions(msg: string) {
    return await this.toastController.create({
      message: msg,
      keyboardClose: true,
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Uploading...',
          handler: () => {
            console.log('Favorite clicked');
          }
        }
      ]
    });
  }

  ionViewWillEnter() {
    this.selectedFile = null;
  }
}
