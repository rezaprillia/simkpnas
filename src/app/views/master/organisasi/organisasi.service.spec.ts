import { TestBed } from '@angular/core/testing';

import { OrganisasiService } from './organisasi.service';

describe('OrganisasiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrganisasiService = TestBed.get(OrganisasiService);
    expect(service).toBeTruthy();
  });
});
