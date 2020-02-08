import { Component, OnInit, Input } from '@angular/core';
import { GenreObj } from 'src/app/home/entity/initial-entity';

@Component({
  selector: 'net-genre-slider',
  templateUrl: './genre-slider.component.html',
  styleUrls: ['./genre-slider.component.scss'],
})
export class GenreSliderComponent implements OnInit {

  @Input() title: string;
  @Input() genreList: GenreObj[] = [];
  skeletonList = [1,2,3,4,5,6,7,8];
  sliderOpts = {
    // spaceBetween: 0,
    centeredSlides: false,
    slidesPerView: 7.5,
    updateOnWindowResize: true,
    grabCursor: true,
    freeMode: true,
    // loop: true,
    // Responsive breakpoints
    breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.5,
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
      slidesPerView: 3.9,
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
  }
  constructor() { }

  ngOnInit() {}

}
