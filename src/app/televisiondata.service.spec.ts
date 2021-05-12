import { TestBed } from '@angular/core/testing';

import { TelevisiondataService } from './televisiondata.service';

describe('TelevisiondataService', () => {
  let service: TelevisiondataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelevisiondataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
