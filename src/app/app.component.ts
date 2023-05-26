import { Component, EventEmitter, Output } from '@angular/core';
import { IProduct } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  imgParent = '';
  showImg = true;
  toBuyProducts: IProduct[] = [];

  @Output() addedProduct = new EventEmitter<IProduct>();

  onLoaded(img: string) {
    console.log('log padre');
    console.log('imgUrl :>> ', img);
  }

  onClickProductImg(img: string) {
    this.imgParent = img;
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }

  onAddToShoopingCart(product: IProduct) {
    this.toBuyProducts.push(product);
  }
}
