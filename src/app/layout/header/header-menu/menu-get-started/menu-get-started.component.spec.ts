import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGetStartedComponent } from './menu-get-started.component';

describe('MenuGetStartedComponent', () => {
  let component: MenuGetStartedComponent;
  let fixture: ComponentFixture<MenuGetStartedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuGetStartedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuGetStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
