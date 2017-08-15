import { Component, OnInit } from '@angular/core';
import {Stock} from "../stock-manage/stock-manage.component";

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  private stock: Stock;

  constructor() { }

  ngOnInit() {
    this.stock = new Stock(1, 'the 1st one', 1.90, 3.5, 'this is the first one', ['IT', 'Elec']);
  }

}
