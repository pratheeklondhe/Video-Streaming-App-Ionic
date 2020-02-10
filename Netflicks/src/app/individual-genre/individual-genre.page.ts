import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenreObj } from '../home/entity/initial-entity';
import { HomeService } from '../home/home.service';
import { error } from 'protractor';

@Component({
  selector: 'app-individual-genre',
  templateUrl: './individual-genre.page.html',
  styleUrls: ['./individual-genre.page.scss'],
})
export class IndividualGenrePage implements OnInit {

  genre: GenreObj;

  constructor(private router: Router,
      private homeService: HomeService) {
    this.getRouterData();     
   }

   getRouterData() {
    if (this.router.getCurrentNavigation().extras.state) {
      this.genre = this.router.getCurrentNavigation().extras.state.genre;
      console.log(this.genre);
    }
   }

  ngOnInit() {
    this.homeService.getGenreOfCategory(this.genre.category[0]).subscribe(data => {
      console.log(data)
    }, error => {

    })
  }

}
