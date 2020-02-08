import { Injectable } from '@angular/core';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private dataService: DataService) { }

  getInitialData() {
    return this.dataService.rest_get('retreivegenre/getinitial');
  }
}
