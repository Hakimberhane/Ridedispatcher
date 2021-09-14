import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivereditpageComponent } from './drivereditpage.component';

describe('DrivereditpageComponent', () => {
  let component: DrivereditpageComponent;
  let fixture: ComponentFixture<DrivereditpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrivereditpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivereditpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
