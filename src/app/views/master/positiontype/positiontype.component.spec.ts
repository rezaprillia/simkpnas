import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionTypeComponent } from './positiontype.component';

describe('PositiontypeComponent', () => {
  let component: PositionTypeComponent;
  let fixture: ComponentFixture<PositionTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
