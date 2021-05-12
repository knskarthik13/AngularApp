import { TestBed } from '@angular/core/testing';

import { CameradataService } from './cameradata.service';

describe('CameradataService', () => {
  let service: CameradataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CameradataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
