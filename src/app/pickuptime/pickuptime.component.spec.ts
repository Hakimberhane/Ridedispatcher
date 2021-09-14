import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickuptimeComponent } from './pickuptime.component';

describe('PickuptimeComponent', () => {
  let component: PickuptimeComponent;
  let fixture: ComponentFixture<PickuptimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickuptimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickuptimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
