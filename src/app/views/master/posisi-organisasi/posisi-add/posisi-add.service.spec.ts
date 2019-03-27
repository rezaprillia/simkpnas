import { TestBed } from '@angular/core/testing';

import { PosisiAddService } from './posisi-add.service';

describe('PosisiAddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PosisiAddService = TestBed.get(PosisiAddService);
    expect(service).toBeTruthy();
  });
});
