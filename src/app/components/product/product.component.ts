import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass'],
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct = {
    id: '',
    name: '',
    image: '',
    price: 0,
  };

  constructor() {}

  ngOnInit(): void {}

}
