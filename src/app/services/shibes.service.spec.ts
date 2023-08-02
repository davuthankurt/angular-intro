import { TestBed } from '@angular/core/testing';

import { ShibesService } from './shibes.service';

describe('ShibesService', () => {
  let service: ShibesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShibesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
