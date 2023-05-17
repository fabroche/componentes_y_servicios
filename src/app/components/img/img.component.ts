import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'myImg',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.sass'],
})
export class ImgComponent implements OnInit {
  @Input() img: string = 'valor inicial';
  @Output() loaded = new EventEmitter<string>();
  imgDefault = '../../../assets/img404.png';

  constructor() {}

  ngOnInit(): void {}

  imgError() {
    this.img = this.imgDefault;
  }

  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}
