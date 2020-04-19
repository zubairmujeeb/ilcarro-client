import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCarResultComponent } from './find-car-result.component';

describe('FindCarResultComponent', () => {
  let component: FindCarResultComponent;
  let fixture: ComponentFixture<FindCarResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCarResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCarResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
