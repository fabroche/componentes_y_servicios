import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';

@Component({
  selector: 'ProductList',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass'],
})
export class ProductsComponent {
  
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
}
