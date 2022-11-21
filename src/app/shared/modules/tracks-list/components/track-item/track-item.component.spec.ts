import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { Actions } from '@ngrx/effects';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ListArtistsPipe } from 'src/app/shared/pipes/list-artists.pipe';
import { SecondTrackMusicPipe } from 'src/app/shared/pipes/second-track-music.pipe';
import { TrackService } from 'src/app/track-detail-page/services/track.service';
import { savedItemsMockStore } from 'src/Test-utilities/store-mocks-data';
import { trackMockData } from 'src/Test-utilities/track-mock-data';

import { TrackItemComponent } from './track-item.component';

describe('TrackItemComponent', () => {
  let component: TrackItemComponent;
  let fixture: ComponentFixture<TrackItemComponent>;
  let actions: Actions;
  let trackService: TrackService;

  beforeEach(async () => {
    const trackServiceSpy = jasmine.createSpyObj(trackService, ['changeSavedTrack']);
    const actionsSpy = jasmine.createSpyObj(actions, ['pipe'])
    await TestBed.configureTestingModule({
      declarations: [ TrackItemComponent, ListArtistsPipe, SecondTrackMusicPipe ],
      providers: [
        provideMockStore({
          initialState:{
            savedItems: savedItemsMockStore,
          }
        }),
        {provide: Actions, useValue: actionsSpy},
        {provide: TrackService, useValue: trackServiceSpy}
      ],
      imports:[
        RouterTestingModule,

        MatIconModule,

      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackItemComponent);
    component = fixture.componentInstance;
    component.track = trackMockData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
