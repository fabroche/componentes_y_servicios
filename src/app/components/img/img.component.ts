import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  OnDestroy,
  AfterViewInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'ProductImg',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.sass'],
})
export class ImgComponent
  implements OnInit, OnChanges, OnDestroy, AfterViewInit
{
  img: string = 'valor inicial';

  @Input('img') set changeImg(newImg: string) {
    this.img = newImg;
  }
  @Output() loaded = new EventEmitter<string>();
  imgDefault = '../../../assets/img404.png';

  constructor() {
    console.log('constructor :>> ', this.img);
  }

  ngOnInit(): void {
    console.log('ngOnInit :>> ', this.img);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges :>> ', this.img);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy :>> ');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit :>> ');
  }

  imgError() {
    this.img = this.imgDefault;
  }

  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}
