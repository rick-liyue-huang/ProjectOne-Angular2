import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";


@Injectable()
export class StockService {

  constructor(public http: Http) { }

  /*

  getStocks(): Stock[] {
    return this.stocks;
  }

  getStock(id: number): Stock {

    var stock = this.stocks.find(stock => stock.id == id);

    // for the 'create' button
    if (!stock) {
      stock = new Stock(0, "", 0, 0, "", "", []);
    }

    return stock;
  }

  */

  getStocks(): Observable<Stock[]> {
    return this.http.get('/api/stock').map(res => res.json());
  }


  getStock(id: number): Observable<Stock> {
    return this.http.get('/api/stock/' + id).map(res => res.json());
  }

}

export class Stock {

  constructor(public id: number,
              public name: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {
  }

}

/*
private stocks:  Stock[] = [
  new Stock(1, 'the 1st one', 1.90, 3.5, ((3.5/5)*100).toFixed(2)  + '%', 'this is the first one', ['IT', 'Elec']),
  new Stock(2, 'the 2nd one', 1.40, 4.5, ((4.5/5)*100).toFixed(2)  + '%', 'this is the second one', ['Finance', 'Elec']),
  new Stock(3, 'the 3rd one', 1.30, 1.5, ((1.5/5)*100).toFixed(2)  + '%', 'this is the third one', ['IT', 'Finance']),
  new Stock(4, 'the 4th one', 3.90, 3.0, ((3.0/5)*100).toFixed(2)  + '%', 'this is the fourth one', ['IT', 'Elec']),
  new Stock(5, 'the 5th one', 2.40, 4.5, ((4.5/5)*100).toFixed(2)  + '%', 'this is the fifth one', ['Finance', 'Elec']),
  new Stock(6, 'the 6th one', 1.70, 2.0, ((2.0/5)*100).toFixed(2)  + '%', 'this is the sixth one', ['IT', 'Elec']),
  new Stock(7, 'the 7th one', 6.80, 3.0, ((3.0/5)*100).toFixed(2)  + '%', 'this is the seventh one', ['IT', 'Finance']),
  new Stock(8, 'the 8th one', 8.50, 5.0, ((5.0/5)*100).toFixed(2)  + '%', 'this is the eighth one', ['IT', 'Elec']),
];

*/

































