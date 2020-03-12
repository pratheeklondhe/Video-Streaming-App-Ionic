import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { HttpParams } from '@angular/common/http';
import { GenreObj } from '../home/entity/initial-entity';

@Injectable()
export class AdminService {

  constructor(private dataService: DataService) { }

  getGenreListByCategory(categoryList: any) {
    return this.dataService.
      rest_post('retreivegenre/listgenreofcategory', categoryList);
  }

  getCategories() {
    return this.dataService.rest_get('retreivegenre/getcategorylist');
  }

  getGenreByGenreId(genreId: string) {
    const params: HttpParams = new HttpParams()
    .set('genreid', genreId)
    return this.dataService.rest_get('retreivegenre/getgenrebygenreid', params);
  }

  updateGenreByGenreId(genre: GenreObj) {
    return this.dataService.rest_post('genre/updategenre', genre);
  }

  addGenre(genre: GenreObj) {
    return this.dataService.rest_post('genre/addgenre', genre);
  }

  uploadFlie(payLoad, options) {
    return this.dataService.rest_mulipart_form('genre/uploadgenre', payLoad, options);
  }

  deleteGenre(genreId: string, fileName: string) {
    const params: HttpParams = new HttpParams()
    .set('genreId', genreId)
    .set('genreTitle', fileName);
    return this.dataService.rest_get('retreivegenre/removegenre', params);
  }
}
