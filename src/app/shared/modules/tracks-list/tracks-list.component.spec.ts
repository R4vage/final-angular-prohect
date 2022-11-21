import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { TrackItemComponentMock } from 'src/Test-utilities/mockedComponents/item-track-mock.component';
import { trackMockData } from 'src/Test-utilities/track-mock-data';

import { TracksListComponent } from './tracks-list.component';

describe('TracksListComponent', () => {
  let component: TracksListComponent;
  let fixture: ComponentFixture<TracksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        TracksListComponent,
        TrackItemComponentMock
      ],
      imports: [
        MatIconModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TracksListComponent);
    component = fixture.componentInstance;
    component.tracks = [trackMockData]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
