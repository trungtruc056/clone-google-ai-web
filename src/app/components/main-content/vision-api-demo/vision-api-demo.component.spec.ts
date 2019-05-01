import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionApiDemoComponent } from './vision-api-demo.component';

describe('VisionApiDemoComponent', () => {
  let component: VisionApiDemoComponent;
  let fixture: ComponentFixture<VisionApiDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisionApiDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisionApiDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
