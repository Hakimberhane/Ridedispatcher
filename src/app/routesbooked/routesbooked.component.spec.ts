import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesbookedComponent } from './routesbooked.component';

describe('RoutesbookedComponent', () => {
  let component: RoutesbookedComponent;
  let fixture: ComponentFixture<RoutesbookedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutesbookedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesbookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
