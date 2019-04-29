import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuWhyGoogleComponent } from './menu-why-google.component';

describe('MenuWhyGoogleComponent', () => {
  let component: MenuWhyGoogleComponent;
  let fixture: ComponentFixture<MenuWhyGoogleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuWhyGoogleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuWhyGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
