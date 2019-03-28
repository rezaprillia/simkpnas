import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgTypeComponent } from './orgtype.component';

describe('OrgTypeComponent', () => {
  let component: OrgTypeComponent;
  let fixture: ComponentFixture<OrgTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
