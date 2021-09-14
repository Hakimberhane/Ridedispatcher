import { TestBed } from '@angular/core/testing';

import { RouteservicesService } from './routeservices.service';

describe('RouteservicesService', () => {
  let service: RouteservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
