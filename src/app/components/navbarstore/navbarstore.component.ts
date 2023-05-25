import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Navbarstore',
  templateUrl: './navbarstore.component.html',
  styleUrls: ['./navbarstore.component.sass'],
})
export class NavbarstoreComponent implements OnInit {
  activeMenu = false;

  constructor() {}

  ngOnInit(): void {}

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }
}
