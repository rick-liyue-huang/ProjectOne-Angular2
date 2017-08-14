import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  // define stocks
  private stocks: Array<Stock>;

  constructor() { }

  // call it when initiating page
  ngOnInit() {
    this.stocks = [
      new Stock(1, 'the 1st one', 1.90, 3.5, 'this is the first one', ['IT', 'Elec']),
      new Stock(2, 'the 2nd one', 1.40, 4.5, 'this is the second one', ['Financial', 'Elec']),
      new Stock(3, 'the 3rd one', 1.30, 1.5, 'this is the third one', ['IT', 'Financial']),
      new Stock(4, 'the 4th one', 3.90, 3.0, 'this is the fourth one', ['IT', 'Mechanical']),
      new Stock(5, 'the 5th one', 2.40, 4.5, 'this is the fifth one', ['Mechanical', 'Elec']),
      new Stock(6, 'the 6th one', 1.70, 2.0, 'this is the sixth one', ['IT', 'Elec']),
      new Stock(7, 'the 7th one', 6.80, 3.0, 'this is the seventh one', ['IT', 'Financial']),
      new Stock(8, 'the 8th one', 8.50, 5.0, 'this is the eighth one', ['IT', 'Elec']),
    ];
  }

}


// define the stock class

export class Stock {

  constructor(
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {}
}
