import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

  stars: boolean[];

  @Input()
  readonly: boolean = true;

  // it means that the rating is import from others
  @Input()
  rating: number = 0;

  // when click save to emit the result to outer
  @Output()
  ratingChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.stars = [];

    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }

  ngOnInit() { // because it is called after 'ngOnChanges' hook, so can delete the following code.

    // this.stars = [];
    //
    // for (let i = 1; i <= 5; i++) {
    //   this.stars.push(i > this.rating);
    // }


    // this.stars = [false, false, true, true, true];
  }



  clickStar(index: number) {

    if (!this.readonly) { // used to bind the readonly property

      this.rating = index + 1;


      // this.stars = [];
      //
      // for (let i = 1; i <= 5; i++) {
      //   this.stars.push(i > this.rating);
      // }

      this.ratingChange.emit(this.rating);

    }


  }

}

































