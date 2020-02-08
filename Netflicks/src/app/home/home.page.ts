import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { HomepageInitial } from './entity/initial-entity';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  homepageInitial: HomepageInitial = new HomepageInitial();
  numbers = [1,2,3,4,5,6,7,8];
  constructor(private homeService: HomeService, private router: Router) {
   }

   getInitialData() {
    this.homeService.getInitialData().subscribe(data => {
      if(data) {
        this.homepageInitial = <HomepageInitial>data;
      }
    }, error => {
      console.log('ERROR GETTING DATA')
    });
   }

  ngOnInit() {
    this.getInitialData();   
  }

  genreSelected(navigationExtras: NavigationExtras) {
    console.log(navigationExtras);
    // NavigationExtras
    this.router.navigate(['/genre'], navigationExtras);
  }

}
