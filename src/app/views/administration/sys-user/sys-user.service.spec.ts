import { TestBed } from '@angular/core/testing';

import { SysUserService } from './sys-user.service';

describe('SysUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SysUserService = TestBed.get(SysUserService);
    expect(service).toBeTruthy();
  });
});
