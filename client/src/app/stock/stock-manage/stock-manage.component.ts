import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Stock, StockService} from "../stock.service";
import {FormControl} from "@angular/forms";
import "rxjs/Rx";

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  // define stocks
  private stocks: Array<Stock>;

  // for the input rxjs
  private nameFilter: FormControl = new FormControl();

  private keywordwork: string;

  constructor(private router: Router, private stockService: StockService ) {}

  // call it when initiating page
  ngOnInit() {

    this.stocks = this.stockService.getStocks();

    this.nameFilter.valueChanges
      .debounceTime(500) // from 'rxjs/Rx'
      .subscribe(value => this.keywordwork = value);

  }

  create() {
    this.router.navigateByUrl('/stock/0')
  }

  update(stock: Stock) {
    this.router.navigateByUrl('/stock/' + stock.id);
  }
}


























