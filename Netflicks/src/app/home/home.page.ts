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
  tempData = new HomepageInitial();
  numbers = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor(private homeService: HomeService, private router: Router) {
  }

  getInitialData() {
    setTimeout(() => {
      this.refreshSliders();
    }, 0);
    this.homeService.getInitialData().subscribe(data => {
      if (data) {
        this.homepageInitial = data as HomepageInitial;
        this.sliderInitialize();
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
    this.router.navigate(['/genre/' + navigationExtras.state.genre.genreId], navigationExtras);
  }

  refreshSliders() {
    this.genreSliderComponent.forEach(slider => {
      slider.updateSlider();
    });
  }

  stopAutoPlayOfAll() {
    this.genreSliderComponent.forEach(slider => {
      slider.slider.stopAutoplay();
    });
  }

  sliderInitialize() {
    setTimeout(() => {
          this.refreshSliders();
          this.stopAutoPlayOfAll();
          setTimeout(() => {
            this.slidesPlayLogic();
          }, 200);
        }, 100);
  }

  slidesPlayLogic() {
    this.genreSliderComponent.toArray()[0].slider.startAutoplay();
  }

  ionViewDidLeave() {
    this.tempData = JSON.parse(JSON.stringify(this.homepageInitial));
    this.homepageInitial = new HomepageInitial();
  }

  ionViewWillEnter() {
      this.homepageInitial = JSON.parse(JSON.stringify(this.tempData));
  }

}
