import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'net-genre-dashboard',
  templateUrl: './genre-dashboard.component.html',
  styleUrls: ['./genre-dashboard.component.scss'],
})
export class GenreDashboardComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Output() watchNow: EventEmitter<boolean> = new EventEmitter<boolean>();

  isDescriptionExpanded = true;

  constructor(private toastController: ToastController) { }

  ngOnInit() {}

  async downloadGenre() {
    const toast = await this.toastController.create({
      message: 'Not Available For Download',
      duration: 2000,
      keyboardClose: true,
      mode: "md"
    });
    toast.present();
  }

  playPause() {
    this.watchNow.emit(true);
  }

}
