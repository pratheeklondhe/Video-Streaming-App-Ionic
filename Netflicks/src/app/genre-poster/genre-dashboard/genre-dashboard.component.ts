import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'net-genre-dashboard',
  templateUrl: './genre-dashboard.component.html',
  styleUrls: ['./genre-dashboard.component.scss'],
})
export class GenreDashboardComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  isDescriptionExpanded = false;

  constructor() { }

  ngOnInit() {}

  toggleDescription() {

  }

}
