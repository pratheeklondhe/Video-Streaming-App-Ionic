import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'net-genre-poster',
  templateUrl: './genre-poster.component.html',
  styleUrls: ['./genre-poster.component.scss'],
})
export class GenrePosterComponent implements OnInit {

  @Input() imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuldhIBGBw1T5Y_bolOGKX479m-eXK0T8jwFINBvzHDb5y7WpY';

  constructor() { }

  ngOnInit() {}

}
