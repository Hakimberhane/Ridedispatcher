import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteregistrationComponent } from './routeregistration.component';

describe('RouteregistrationComponent', () => {
  let component: RouteregistrationComponent;
  let fixture: ComponentFixture<RouteregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
