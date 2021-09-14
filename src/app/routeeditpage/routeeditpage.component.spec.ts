import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteeditpageComponent } from './routeeditpage.component';

describe('RouteeditpageComponent', () => {
  let component: RouteeditpageComponent;
  let fixture: ComponentFixture<RouteeditpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteeditpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteeditpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
