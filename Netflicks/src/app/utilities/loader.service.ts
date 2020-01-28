import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(public loadingController: LoadingController) { }

  async createBasicLoader() {
    return this.loadingController.create({
      message: 'Please Wait',
      duration: 2000
    });
  }
}
