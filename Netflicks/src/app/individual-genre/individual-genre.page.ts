import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { GenreObj } from '../home/entity/initial-entity';
import { HomeService } from '../home/home.service';
import { GenreSliderComponent } from '../genre-slider/genre-slider/genre-slider.component';
import { GenrePosterComponent } from '../genre-poster/genre-poster.component';

@Component({
  selector: 'app-individual-genre',
  templateUrl: './individual-genre.page.html',
  styleUrls: ['./individual-genre.page.scss'],
})
export class IndividualGenrePage implements OnInit {

  @ViewChild(GenrePosterComponent, { static: false }) genrePosterComponent: GenrePosterComponent;
  @ViewChildren(GenreSliderComponent) genreSliderComponent: QueryList<GenreSliderComponent>;
  genre: GenreObj;
  similarGenres: GenreObj[] = [];

  constructor(private router: Router, private homeService: HomeService) {
    this.getRouterData();
  }

  getRouterData() {
    if (this.router.getCurrentNavigation().extras.state) {
      this.genre = this.router.getCurrentNavigation().extras.state.genre;
      console.log(this.genre);
    }
  }

  ngOnInit() {
    this.getGenreOfCategory();
  }

  getGenreOfCategory() {
    this.homeService.getGenreOfCategory(this.genre.category[0], this.genre.genreId).subscribe(data => {
      this.similarGenres = data as GenreObj[];
      if (this.similarGenres && this.similarGenres.length) {

      } else {
        console.log('No Similar Genres available');
      }
      console.log(data);
    }, err => {
      console.log(err);
    });
  }

  genreSelected(navigationExtras: NavigationExtras) {
    this.router.navigate(['/genre/' + navigationExtras.state.genre.genreId], navigationExtras);
  }

  ionViewDidEnter() {
    this.refreshSliders();
  }

  refreshSliders() {
    this.genreSliderComponent.forEach(slider => {
      slider.updateSlider();
    });
  }

  routeToHome() {
    this.router.navigateByUrl('/home');
  }

  playGenre() {
    this.homeService.sampleCall().subscribe();
  }

  watchNow() {
    this.genrePosterComponent.playPause();
  }

}
