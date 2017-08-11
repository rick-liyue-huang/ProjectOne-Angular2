import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;

  private imgUrl = 'http://placehold.it/320x150';

  constructor() { }

  // lifecycle hook
  ngOnInit() {
    this.products = [
      new Product(1, "the 1st product", 1.8, 3, 'very good', ["elec", "fast"]),
      new Product(2, "the 2nd product", 2.8, 4, 'very good', ["elec", "fast"]),
      new Product(3, "the 3rd product", 3.8, 5, 'very good', ["elec", "fast"]),
      new Product(4, "the 4th product", 4.8, 2, 'very good', ["elec", "fast"]),
      new Product(5, "the 5th product", 3.8, 1, 'very good', ["elec", "fast"]),
      new Product(6, "the 6th product", 2.8, 4, 'very good', ["elec", "fast"])

    ];

    this.products.push(new Product(7, "the 7th product", 2.8, 5, 'very good', ["elec", "fast"]));
  }

}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }

}
































