import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { HomepageInitial } from './entity/initial-entity';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  homepageInitial: HomepageInitial = new HomepageInitial();
  numbers = [1,2,3,4,5,6,7,8];
  constructor(private homeService: HomeService) {
    this.getInitialData();

    window.addEventListener('orientationchange', function() {
      console.log(window.orientation);
      }, false);
    
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
  }

  checkScreen(){
    console.log(window.innerWidth);
    if(window.innerWidth>=960){
        return 2.125;
    }else{
        return 1.125;
    }
}

}
