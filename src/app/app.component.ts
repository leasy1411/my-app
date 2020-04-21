import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  appTitle = 'Kitty';
}

export class Product {
  constructor(
    public title: string,
    public price: number,
    public description: string
  ) {}
}
