import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { GenreObj } from 'src/app/home/entity/initial-entity';
import { NavigationExtras } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'net-genre-slider',
  templateUrl: './genre-slider.component.html',
  styleUrls: ['./genre-slider.component.scss'],
})
export class GenreSliderComponent implements OnInit {

  @ViewChild (IonSlides, { static: false } ) slider: IonSlides;

  @Input() title: string;
  @Input() genreList: GenreObj[] = [];
  @Output() genreSelected: EventEmitter<NavigationExtras> = new EventEmitter<NavigationExtras>();


  skeletonList = [1, 2, 3, 4, 5, 6, 7, 8];
  sliderOpts = {
  autoplay: {
    delay: 4000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    reverseDirection: false,
  },
  lazy: {
    loadPrevNext: false,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  // cssMode: true,
  // effect: 'coverflow',
  // coverflowEffect: {
  //   rotate: 30,
  //   slideShadows: true,
  // },
    speed: 400,
    // spaceBetween: 25,
    // slidesPerColumn: 1,
    // resistance: false,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    freeModeMomentum: true,
    centeredSlides: false,
    slidesPerView: 7.5,
    updateOnWindowResize: true,
    grabCursor: true,
    freeMode: true,
    preloadImages: true,
    updateOnImagesReady: true,
    // loop: true,
    // Responsive breakpoints
    breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.9,
      // spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2.5,
      // spaceBetween: 30
    },
    // when window width is >= 480px
    550: {
      slidesPerView: 3.1,
      // spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3.5,
      // spaceBetween: 40
    },
    // when window width is >= 800px
    800: {
      slidesPerView: 5.5,
      // spaceBetween: 40
    },
    // when window width is >= 960px
    960: {
      slidesPerView: 6.5,
      // spaceBetween: 40
    },
    // when window width is >= 1220px
    1220: {
      slidesPerView: 7.5,
      // spaceBetween: 40
    }
  }
  };

  constructor() { }

  ngOnInit() {}

  slidePlay() {
    //     setInterval(async () => {
      this.slider.startAutoplay();
    //   if (await this.slider.isEnd()) {
    //     setTimeout(() => {
    //       this.slider.slideTo(0);
    //     }, 1000);
    //   }
    // }, 2000);
  }

  cardClicked(genre: GenreObj) {
    const navigationExtras: NavigationExtras = {
      state: {
        genre
      }
    };
    this.genreSelected.emit(navigationExtras);
  }

  updateSlider() {
    console.log("HERe");
    this.slider.update();
    this.slider.updateAutoHeight();
  }

}
