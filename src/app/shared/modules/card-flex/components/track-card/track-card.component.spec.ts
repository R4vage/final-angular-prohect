import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterTestingModule } from '@angular/router/testing';
import { Actions } from '@ngrx/effects';
import { provideMockStore } from '@ngrx/store/testing';
import { MaterialModule } from 'src/app/material/material.module';
import { TrackService } from 'src/app/track-detail-page/services/track.service';
import { savedItemsMockStore, savedTracksStoreMock, topUserAlbumsStoreMock } from 'src/Test-utilities/store-mocks-data';
import { trackMockData } from 'src/Test-utilities/track-mock-data';

import { TrackCardComponent } from './track-card.component';

describe('TrackCardComponent', () => {
  let component: TrackCardComponent;
  let fixture: ComponentFixture<TrackCardComponent>;
  let actions: Actions;
  let trackService: TrackService;
  beforeEach(async () => {
    const actionsSpy = jasmine.createSpyObj(actions, ['pipe']);
    const trackServiceSpy = jasmine.createSpyObj(trackService, ['changeSavedTrack'])

    await TestBed.configureTestingModule({
      
      imports: [
        MatCardModule,
        MatIconModule,
        RouterTestingModule,
        MatTooltipModule
      ],
      declarations: [TrackCardComponent],
      providers: [
        provideMockStore({
          initialState:{
            savedItems: savedItemsMockStore,
            savedTracks: savedTracksStoreMock
          }
        }),
        {provide: Actions, useValue: actionsSpy},
        {provide: TrackService, useValue: trackServiceSpy}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TrackCardComponent);
    component = fixture.componentInstance;
    component.track = trackMockData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
