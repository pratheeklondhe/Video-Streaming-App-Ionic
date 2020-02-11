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

  getGenreOfCategory(category: string, genreId: string) {
    const params: HttpParams = new HttpParams()
    .set('category', category)
    .set('skip', '0')
    .set('limit', '2')
    .set('genreId', genreId);
    return this.dataService.rest_get('retreivegenre/getgenreofcategory', params);
  }
}
