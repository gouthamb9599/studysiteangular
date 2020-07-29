import { TestBed } from '@angular/core/testing';

import { TeacherfetchService } from './teacherfetch.service';

describe('TeacherfetchService', () => {
  let service: TeacherfetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherfetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
