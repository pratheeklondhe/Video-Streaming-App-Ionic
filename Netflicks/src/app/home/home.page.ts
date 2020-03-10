import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { HomeService } from './home.service';
import { HomepageInitial, GenreObj } from './entity/initial-entity';
import { Router, NavigationExtras } from '@angular/router';
import { GenreSliderComponent } from '../genre-slider/genre-slider/genre-slider.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChildren(GenreSliderComponent) genreSliderComponent: QueryList<GenreSliderComponent>;

  homepageInitial = new HomepageInitial();
  numbers = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor(private homeService: HomeService, private router: Router) {
  }

  getInitialData() {
    console.log(this.homepageInitial);
    setTimeout(() => {
          this.refreshSliders();
        }, 0);
    this.homeService.getInitialData().subscribe(data => {
      if (data) {
        // this.genreKey = Object.keys(data);
        // this.genreValue = Object.values(data) as GenreObj[];
        this.homepageInitial = data as HomepageInitial;
        setTimeout(() => {
          this.refreshSliders();
        }, 100);
      }

    }, error => {
      console.log('ERROR GETTING DATA');
      console.log(error);
    });
  }

  ngOnInit() {
    this.getInitialData();
  }

  genreSelected(navigationExtras: NavigationExtras) {
    // navigationExtras.skipLocationChange = true;
    // navigationExtras.replaceUrl = true;
    console.log(navigationExtras);
    this.router.navigate(['/genre/' + navigationExtras.state.genre.genreId], navigationExtras);
  }

  ionViewDidEnter() {
  }

  refreshSliders() {
    this.genreSliderComponent.forEach(slider => {
      slider.updateSlider();
    });
  }

}
