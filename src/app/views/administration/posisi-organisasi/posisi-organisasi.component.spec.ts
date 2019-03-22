import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosisiOrganisasiComponent } from './posisi-organisasi.component';

describe('PosisiOrganisasiComponent', () => {
  let component: PosisiOrganisasiComponent;
  let fixture: ComponentFixture<PosisiOrganisasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosisiOrganisasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosisiOrganisasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
