import { Injectable } from '@angular/core';
import { DataService } from '../data.service';

@Injectable()
export class AboutService {

  constructor(private dataService: DataService) { }

  reportVisit() {
    return this.dataService.rest_put('session/visit', {});
  }

  reportPVisit() {
    return this.dataService.rest_put('session/portfolio', {});
  }

}
