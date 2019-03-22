import { TestBed } from '@angular/core/testing';

import { OrgTypeService } from './orgtype.service';

describe('OrgtypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrgTypeService = TestBed.get(OrgTypeService);
    expect(service).toBeTruthy();
  });
});
