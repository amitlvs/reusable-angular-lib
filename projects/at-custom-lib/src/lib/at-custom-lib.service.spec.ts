import { TestBed } from '@angular/core/testing';

import { AtCustomLibService } from './at-custom-lib.service';

describe('AtCustomLibService', () => {
  let service: AtCustomLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtCustomLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
