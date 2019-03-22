import { TestBed } from '@angular/core/testing';

import { PositiontypeService } from './positiontype.service';

describe('PositiontypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PositiontypeService = TestBed.get(PositiontypeService);
    expect(service).toBeTruthy();
  });
});
