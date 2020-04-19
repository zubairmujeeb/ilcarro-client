import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestFeedsComponent } from './latest-feeds.component';

describe('LatestFeedsComponent', () => {
  let component: LatestFeedsComponent;
  let fixture: ComponentFixture<LatestFeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestFeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
