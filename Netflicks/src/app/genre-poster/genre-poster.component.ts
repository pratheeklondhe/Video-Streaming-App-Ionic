import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { GenreObj } from '../home/entity/initial-entity';
import { DataService } from '../data.service';
import { LoginServiceService } from '../login/login-service.service';

@Component({
  selector: 'net-genre-poster',
  templateUrl: './genre-poster.component.html',
  styleUrls: ['./genre-poster.component.scss'],
})
export class GenrePosterComponent implements OnChanges {
  @Input() imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuldhIBGBw1T5Y_bolOGKX479m-eXK0T8jwFINBvzHDb5y7WpY';
  @Input() genre: GenreObj;

  isPlaying = false;
  isStartedPlaying = false;
  url: string;

  constructor(private loginServiceService: LoginServiceService, private dataService: DataService) { }

  ngOnChanges() {
    this.url = this.getVideoUrl();
    // console.log(`ngOnChanges: ${this.url}`);
  }

  playPause() {
    this.isStartedPlaying = true;
    setTimeout(() => {
      this.toggleVideoState();
    }); 
  }

  getVideoUrl(): string {
    return this.dataService.getBaseUrl() + 'retreivegenre/stream/' +
      this.genre.genreId + '/' + this.loginServiceService.retrieveToken();
  }

  toggleVideoState() {
    const myVideo: any = document.getElementById(`video_${this.genre.genreId}`);
      if (myVideo && myVideo.paused) {
        myVideo.play();
        this.isPlaying = true;
      } else if (myVideo && !myVideo.paused){
        myVideo.pause();
        this.isPlaying = false;
      }
  }

  setToInitial() {
    this.pauseVideo();
    setTimeout(() => {
      this.isPlaying = false;
      this.isStartedPlaying = false;
    }, 100);
  }

  pauseVideo() {
    const myVideo: any = document.getElementById(`video_${this.genre.genreId}`);
      if (myVideo && !myVideo.paused) {
        myVideo.pause();
        this.isPlaying = false;
      }
  }

}
