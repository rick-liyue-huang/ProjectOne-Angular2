import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private products: Product[] = [
    new Product(1, "the 1st product", 1.8, 3, 'very good', ["elec", "fast"]),
    new Product(2, "the 2nd product", 2.8, 4, 'very good', ["elec", "fast"]),
    new Product(3, "the 3rd product", 3.8, 5, 'very good', ["elec", "fast"]),
    new Product(4, "the 4th product", 4.8, 2, 'very good', ["elec", "fast"]),
    new Product(5, "the 5th product", 3.8, 1, 'very good', ["elec", "fast"]),
    new Product(6, "the 6th product", 2.8, 4, 'very good', ["elec", "fast"])

  ];

  private comments: Comment[] = [
    new Comment(1, 1, "01/07/2017", "Rick", 3, "should ok"),
    new Comment(2, 3, "02/07/2017", "Leo", 4, "very good"),
    new Comment(3, 4, "03/07/2017", "Liyue", 5, "great"),
    new Comment(4, 2, "05/07/2017", "Huang", 2, "no bad")
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number ): Product {
    return this.products.find((product) => product.id == id );
  }

  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment) => comment.productId == id);
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
  ) { }

}

export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) {}
}







































