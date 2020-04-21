import { Component } from '@angular/core';

export class Product {
  constructor(
    public title: string,
    public price: number,
    public description: string,
    public imgurl: string
  ) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  appTitle = 'Game Store';
  title: string;
  price: number;
  description: string;
  imgurl: string;
  products: Product[] = [
    {title: "Overwatch", price: 1999, description: "Overwatch — яркий командный шутер с разнообразным составом героев. Выбирайте своего героя, путешествуйте по миру, сражайтесь за объекты и ведите свою команду к победе.", imgurl: "https://img.gazeta.ru/files3/243/12967243/OVERWATCH-pic1300-1300x600-47493.jpg"}
  ];
  addProduct(title: string, price: number, description: string, imgurl: string) {
    this.products.push(new Product(title, price, description, imgurl));
  }
  removeProduct(index) {
    this.products.splice(index, 1);
  }
}
