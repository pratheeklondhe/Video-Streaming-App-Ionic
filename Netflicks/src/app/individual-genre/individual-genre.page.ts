import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenreObj } from '../home/entity/initial-entity';

@Component({
  selector: 'app-individual-genre',
  templateUrl: './individual-genre.page.html',
  styleUrls: ['./individual-genre.page.scss'],
})
export class IndividualGenrePage implements OnInit {

  genre: GenreObj;

  constructor(private router: Router) {
    this.getRouterData();
      
   }

   getRouterData() {
    if (this.router.getCurrentNavigation().extras.state) {
      this.genre = this.router.getCurrentNavigation().extras.state.genre;
      console.log(this.genre);
    }
   }

  ngOnInit() {
  }

}
