import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';

@Component({
  selector: 'Product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass'],
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct = {
    id: '',
    name: '',
    image: '',
    price: 0,
    description: '',
  };

  @Output() addedProduct = new EventEmitter<IProduct>();

  showDescription = false;

  constructor() {}

  ngOnInit(): void {}

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }

  onShowDescription() {
    this.showDescription = !this.showDescription;
  }
}
