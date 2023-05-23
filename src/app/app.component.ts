import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  imgParent = '';
  showImg = true;

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
}
