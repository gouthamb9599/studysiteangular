import { TestBed } from '@angular/core/testing';

import { CoursefetchService } from './coursefetch.service';

describe('CoursefetchService', () => {
  let service: CoursefetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursefetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
