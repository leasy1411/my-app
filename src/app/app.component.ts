import { Component } from '@angular/core';

export class Product {
  constructor(
    public title: string,
    public price: number,
    public description: string,
    public imgurl: string,
  ) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  appTitle = 'Kitty';
  title: string;
  price: number;
  description: string;
  img: string;
  products: Product[] = [];
  addProduct(title: string, price: number, description: string, imgurl: string) {
    this.products.push(new Product(title, price, description, imgurl))
  }
  removeProduct(index) {
    this.products.splice(index, 1);
  }
}
