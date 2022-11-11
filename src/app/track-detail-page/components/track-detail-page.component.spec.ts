import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { Location } from '@angular/common';
import { ComponentFixture, fakeAsync, flushMicrotasks, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockSelector, MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable, observable, of } from 'rxjs';
import { MaterialModule } from 'src/app/material/material.module';
import { TrackService } from '../services/track.service';

import { TrackDetailPageComponent } from './track-detail-page.component';

import * as TrackSelectors from '../track-detail-store/selectors/track.selectors';
import { createSelector, MemoizedSelector, Store } from '@ngrx/store';
import { TrackState } from '../track-detail-store/reducers/tracks.reducer';
import { Track } from 'src/app/core/models/track.models';
import { trackMockData } from 'src/Test-utilities/track-mock-data';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ListArtistsPipe } from 'src/app/shared/pipes/list-artists.pipe';
import { AudioPlayerComponent } from 'src/app/shared/components/audio-player/audio-player.component';
import { FormsModule } from '@angular/forms';
import { MatButtonHarness } from '@angular/material/button/testing';

describe('TrackDetailPageComponent', () => {
  let component: TrackDetailPageComponent;
  let fixture: ComponentFixture<TrackDetailPageComponent>;
  let el: DebugElement;

  let loader: HarnessLoader;
  let router: Router;
  let trackService: TrackService;
  let location: Location;
  let store: MockStore;

  let mockSelectTrackById;
  const ID_TRACK = 'testParamsTrack';
  const TRACK = trackMockData;
  beforeEach(async () => {
    const trackServiceSpy = jasmine.createSpyObj(TrackService, ['checkSavedTrack']);

    trackServiceSpy.checkSavedTrack.and.returnValue(of([true]));

    await TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        FormsModule,
        RouterTestingModule.withRoutes([
          { path: 'track/:id', component: TrackDetailPageComponent },
          { path: 'track', component: TrackDetailPageComponent },
        ]),
      ],
      declarations: [TrackDetailPageComponent, ListArtistsPipe, AudioPlayerComponent],
      providers: [
        {
          provide: Store,
          useValue: {
            pipe(value: unknown): Observable<Track> {
              return of(TRACK);
            },
          },
        },
        {
          provide: TrackService,
          useValue: trackServiceSpy,
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({
              id: ID_TRACK,
            }),
          },
        },
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(TrackDetailPageComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;

    trackService = TestBed.inject(TrackService);

    spyOn(component, 'checkSavedTrack').and.callThrough();

    router.initialNavigation();
    await router.navigate(['/track', ID_TRACK]);

    loader = TestbedHarnessEnvironment.loader(fixture);

    fixture.detectChanges();
  });

  it('should create and redirect correctly', async () => {
    expect(component).toBeTruthy();
    expect(location.path()).toBe(`/track/${ID_TRACK}`);
    expect(component.idTrack).toBe(ID_TRACK);
    expect(component.checkSavedTrack).toHaveBeenCalledOnceWith(component.idTrack);
  });

  it('should create track information section', () => {
    const trackInformation = el.query(By.css('.track-information'));
    expect(trackInformation).toBeTruthy();
  });
  it("should show track's image", () => {
    const trackImage = el.query(By.css('.image-track'));
    expect(trackImage).toBeTruthy();
    expect(trackImage.attributes['src']).toBe('https://i.scdn.co/image/ab67616d0000b273b4d32739e136e672f913e8b8');
  });
  it('should show title and artist names', () => {
    const trackTitle = el.query(By.css('.title'));
    const trackArtistsList = el.query(By.css('.artists'));

    expect(trackTitle).toBeTruthy();
    expect(trackArtistsList).toBeTruthy();
    expect(trackArtistsList.nativeElement.textContent).toBe('Tokyo Ska Paradise Orchestra, Lilas Ikuta•2022•04:14');
  });
  it('should render audio-player', () => {
    const audioPlayer = el.query(By.css('.audio-player'));

    expect(audioPlayer).toBeTruthy();
  });

  it('should display correctly the buttons', async () => {
    const buttons = await loader.getAllHarnesses(MatButtonHarness.with({ selector: '[mat-raised-button]' }));

    expect(buttons).toBeTruthy();
    expect(buttons.length).toBe(2);
  });
});
