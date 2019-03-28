import { TestBed } from '@angular/core/testing';

import { PosisiOrganisasiService } from './posisi-organisasi.service';

describe('PosisiOrganisasiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PosisiOrganisasiService = TestBed.get(PosisiOrganisasiService);
    expect(service).toBeTruthy();
  });
});
