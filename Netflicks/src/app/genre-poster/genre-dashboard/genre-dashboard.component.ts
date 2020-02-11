import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'net-genre-dashboard',
  templateUrl: './genre-dashboard.component.html',
  styleUrls: ['./genre-dashboard.component.scss'],
})
export class GenreDashboardComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  isDescriptionExpanded = false;

  constructor(private toastController: ToastController) { }

  ngOnInit() {}

  async downloadGenre() {
    const toast = await this.toastController.create({
      message: 'Not Available For Download',
      duration: 200000
    });
    toast.present();
  }

}
