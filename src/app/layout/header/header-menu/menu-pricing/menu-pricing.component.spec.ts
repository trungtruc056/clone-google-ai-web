import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPricingComponent } from './menu-pricing.component';

describe('MenuPricingComponent', () => {
  let component: MenuPricingComponent;
  let fixture: ComponentFixture<MenuPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
