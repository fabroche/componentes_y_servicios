import { Component, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';

@Component({
  selector: 'Shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.sass'],
})
export class ShoppingcartComponent {
  @Input() shoppingcartUrl = '';
  @Input() shoppingcart: IProduct[] = [];
  @Input() icon: string = '';
  totalProducts = 0;
  totalPrice = 0;

  getTotalPrice() {
    this.totalPrice = this.shoppingcart.reduce(
      (sum, item) => sum + item.price,
      0
    );
    return this.totalPrice;
  }

  getTotalProducts() {
    this.totalProducts = this.shoppingcart.length;
    return this.totalProducts;
  }
}
