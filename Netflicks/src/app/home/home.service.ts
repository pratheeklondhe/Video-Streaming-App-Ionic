import { Injectable, Query } from '@angular/core';
import { DataService } from '../data.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private dataService: DataService) { }

  getInitialData() {
    return this.dataService.rest_get('retreivegenre/getinitial');
  }

  getGenreOfCategory(category: string) {
    let params = new HttpParams();
    params.append('category', category);
    params.append('skip', '0');
    params.append('limit', '2');
    return this.dataService.rest_get('retreivegenre/getgenreofcategory', params);
  }
}
