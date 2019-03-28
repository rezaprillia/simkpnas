import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosisiAddComponent } from './posisi-add.component';

describe('PosisiAddComponent', () => {
  let component: PosisiAddComponent;
  let fixture: ComponentFixture<PosisiAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosisiAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosisiAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
