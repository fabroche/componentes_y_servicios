import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';

@Component({
  selector: 'Navbarstore',
  templateUrl: './navbarstore.component.html',
  styleUrls: ['./navbarstore.component.sass'],
})
export class NavbarstoreComponent implements OnInit {
  activeMenu = false;
  @Input() toBuyProducts: IProduct[] = [];

  constructor() {}

  ngOnInit(): void {}

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }
}
