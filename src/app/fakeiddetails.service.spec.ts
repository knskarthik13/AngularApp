import { TestBed } from '@angular/core/testing';

import { FakeiddetailsService } from './fakeiddetails.service';

describe('FakeiddetailsService', () => {
  let service: FakeiddetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeiddetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
