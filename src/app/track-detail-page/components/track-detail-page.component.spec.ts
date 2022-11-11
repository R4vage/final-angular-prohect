import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackDetailPageComponent } from './track-detail-page.component';

describe('TrackDetailPageComponent', () => {
  let component: TrackDetailPageComponent;
  let fixture: ComponentFixture<TrackDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
