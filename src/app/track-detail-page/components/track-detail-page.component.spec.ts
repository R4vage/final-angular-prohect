import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { Location } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { noop, Observable, of, throwError } from 'rxjs';
import { MaterialModule } from 'src/app/material/material.module';
import { TrackService } from '../services/track.service';

import { TrackDetailPageComponent } from './track-detail-page.component';

import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Store } from '@ngrx/store';
import { Track } from 'src/app/core/models/track.models';
import { AudioPlayerComponent } from 'src/app/shared/components/audio-player/audio-player.component';
import { ListArtistsPipe } from 'src/app/shared/pipes/list-artists.pipe';
import { SecondTrackMusicPipe } from 'src/app/shared/pipes/second-track-music.pipe';
import { trackMockData } from 'src/Test-utilities/track-mock-data';

describe('TrackDetailPageComponent', () => {
  let component: TrackDetailPageComponent;
  let fixture: ComponentFixture<TrackDetailPageComponent>;
  let el: DebugElement;

  let loader: HarnessLoader;
  let router: Router;
  let trackService: TrackService;
  let location: Location;

  let snackbar: MatSnackBar;

  const ID_TRACK = 'testParamsTrack';
  const TRACK = trackMockData;
  beforeEach(async () => {
    const trackServiceSpy = jasmine.createSpyObj(TrackService, ['checkSavedTrack', 'saveTrack', 'deleteTrack']);
    const snackbarSpy = jasmine.createSpyObj(MatSnackBar, ['open']);

    trackServiceSpy.checkSavedTrack.and.returnValue(of([true]));
    trackServiceSpy.saveTrack.and.returnValue(of([true]));
    trackServiceSpy.deleteTrack.and.returnValue(of([true]));

    snackbarSpy.open.and.callFake(noop);

    await TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        FormsModule,
        NoopAnimationsModule,
        RouterTestingModule.withRoutes([
          { path: 'track/:id', component: TrackDetailPageComponent },
          { path: 'track', component: TrackDetailPageComponent },
        ]),
      ],
      declarations: [TrackDetailPageComponent, ListArtistsPipe, AudioPlayerComponent, SecondTrackMusicPipe],
      providers: [
        { provide: MatSnackBar, useValue: snackbarSpy },

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
    snackbar = TestBed.inject(MatSnackBar);

    

    router.initialNavigation();
    await router.navigate(['/track', ID_TRACK]);

    loader = TestbedHarnessEnvironment.loader(fixture);

    fixture.detectChanges();
  });

  it('should create and redirect correctly', async () => {
    expect(component).toBeTruthy();
    expect(location.path()).toBe(`/track/${ID_TRACK}`);
    expect(component.idTrack).toBe(ID_TRACK);
  });

  it('should create track information section', () => {
    const trackInformation = el.query(By.css('.track-information'));
    expect(trackInformation).toBeTruthy();
  });
  it("should show track's image", () => {
    const trackImage = el.query(By.css('.image-track'));
    expect(trackImage).toBeTruthy();
    expect(trackImage.attributes['src']).toBe(TRACK.album.images[0].url);
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

  it('should get image from track', () => {
    const image = component.getImage(TRACK);

    expect(image).toBe(TRACK.album.images[0].url);
  });



  it('should deactivate the buttons when an error appears while checking saved tracks', async () => {
    (trackService.checkSavedTrack as jasmine.Spy).and.returnValue(throwError(() => new Error('error')));


    const buttons = await loader.getAllHarnesses(MatButtonHarness.with({ selector: '[mat-raised-button]' }));

    buttons.forEach(async (button) => {
      expect(await button.isDisabled()).toBeTrue();
    });
  });

  it('should save track when save button is clicked', async () => {

    spyOn(component, 'saveTrack').and.callThrough();
    const buttons = await loader.getAllHarnesses(MatButtonHarness.with({ selector: '[mat-raised-button]' }));

    const saveButton = buttons[0];

    expect(snackbar.open).not.toHaveBeenCalled();

    await saveButton.click();
    fixture.detectChanges();

    expect(component.saveTrack).toHaveBeenCalled();

    expect(snackbar.open).toHaveBeenCalled();

    expect(await saveButton.isDisabled()).toBeTrue();
  });

  it('should delete track when delete button is clicked', async () => {

    spyOn(component, 'deleteTrack').and.callThrough();
    const buttons = await loader.getAllHarnesses(MatButtonHarness.with({ selector: '[mat-raised-button]' }));

    const deleteButton = buttons[1];

    expect(snackbar.open).not.toHaveBeenCalled();

    await deleteButton.click();
    fixture.detectChanges();

    expect(component.deleteTrack).toHaveBeenCalled();

    expect(snackbar.open).toHaveBeenCalled();

    expect(await deleteButton.isDisabled()).toBeTrue();
  });
});
