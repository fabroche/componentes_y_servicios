import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarstoreComponent } from './navbarstore.component';

describe('NavbarstoreComponent', () => {
  let component: NavbarstoreComponent;
  let fixture: ComponentFixture<NavbarstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarstoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
