import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuProductsComponent } from './menu-products.component';

describe('MenuProductsComponent', () => {
  let component: MenuProductsComponent;
  let fixture: ComponentFixture<MenuProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
