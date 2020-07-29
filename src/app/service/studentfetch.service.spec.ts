import { TestBed } from '@angular/core/testing';

import { StudentfetchService } from './studentfetch.service';

describe('StudentfetchService', () => {
  let service: StudentfetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentfetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
