import { Component } from '@angular/core';
import { IProduct } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  imgParent = '';
  products: IProduct[] = [
    {
      id: '1',
      name: 'Bike',
      price: 100,
      image: '../assets/products/bike.jpg',
    },
    {
      id: '2',
      name: 'GoT Collection',
      price: 180,
      image: '../assets/products/books.jpg',
    },
    {
      id: '3',
      name: 'Coffe',
      price: 20,
      image: '../assets/products/starbucks1.jpg',
    },
  ];

  onLoaded(img: string) {
    console.log('log padre');
    console.log('imgUrl :>> ', img);
  }

  onClickProductImg(img: string) {
    this.imgParent = img;
  }
}
