import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  stars: boolean[];

  // it means that the rating is import from others
  @Input()
  rating: number = 0;

  constructor() { }

  ngOnInit() {

    this.stars = [];

    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }


    // this.stars = [false, false, true, true, true];
  }



}
