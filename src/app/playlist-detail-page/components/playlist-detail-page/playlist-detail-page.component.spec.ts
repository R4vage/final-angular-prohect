import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { Location } from '@angular/common';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { noop, Observable, of, throwError } from 'rxjs';
import { Playlist } from 'src/app/core/models/playlist.models';
import { PlaylistService } from 'src/app/main-page/services/playlist.service';
import { MaterialModule } from 'src/app/material/material.module';
import { ListArtistsPipe } from 'src/app/shared/pipes/list-artists.pipe';
import { SecondTrackMusicPipe } from 'src/app/shared/pipes/second-track-music.pipe';
import { TracksFromPlaylistPipe } from 'src/app/shared/pipes/tracks-from-playlist.pipe';
import { TrackService } from 'src/app/track-detail-page/services/track.service';
import { playlistWithTracksMockData } from 'src/Test-utilities/playlist-mock-data';
import { PlaylistTracksComponent } from '../playlist-tracks/playlist-tracks.component';

import { PlaylistDetailPageComponent } from './playlist-detail-page.component';

describe('PlaylistDetailPageComponent', () => {
  let component: PlaylistDetailPageComponent;
  let fixture: ComponentFixture<PlaylistDetailPageComponent>;

  let el: DebugElement;

  let loader: HarnessLoader;
  let router: Router;
  let playlistService: PlaylistService;
  let location: Location;

  let snackbar: MatSnackBar;

  const ID_PLAYLIST = 'testParamsPlaylist';
  const ID_USER = 'testman';
  const PLAYLIST = playlistWithTracksMockData;

  beforeEach(async () => {
    const playlistServiceSpy = jasmine.createSpyObj(PlaylistService, ['checkFollowedPlaylist', 'followPlaylist', 'unfollowPlaylist']);
    const trackServiceSpy = jasmine.createSpyObj(TrackService, ['checkSavedTrack', 'saveTrack', 'deleteTrack']);

    const snackbarSpy = jasmine.createSpyObj(MatSnackBar, ['open']);

    playlistServiceSpy.checkFollowedPlaylist.and.returnValue(of([true]));
    playlistServiceSpy.followPlaylist.and.returnValue(of([true]));
    playlistServiceSpy.unfollowPlaylist.and.returnValue(of([true]));

    trackServiceSpy.checkSavedTrack.and.returnValue(of([true, true, true]));

    snackbarSpy.open.and.callFake(noop);

    await TestBed.configureTestingModule({
      declarations: [PlaylistDetailPageComponent, TracksFromPlaylistPipe, SecondTrackMusicPipe, ListArtistsPipe, PlaylistTracksComponent],
      imports: [
        MaterialModule,
        NoopAnimationsModule,
        RouterTestingModule.withRoutes([
          { path: 'playlist/:id', component: PlaylistDetailPageComponent },
          { path: 'playlist', component: PlaylistDetailPageComponent },
        ]),
      ],
      providers: [
        { provide: MatSnackBar, useValue: snackbarSpy },
        { provide: TrackService, useValue: trackServiceSpy },
        {
          provide: Store,
          useValue: {
            pipe(value: unknown): Observable<Playlist> {
              return of(PLAYLIST);
            },
          },
        },
        {
          provide: PlaylistService,
          useValue: playlistServiceSpy,
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({
              id: ID_PLAYLIST,
            }),
          },
        },
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(PlaylistDetailPageComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;

    playlistService = TestBed.inject(PlaylistService);
    snackbar = TestBed.inject(MatSnackBar);

    spyOn(component, 'checkFollowedPlaylist').and.callThrough();

    router.initialNavigation();
    await router.navigate(['/playlist', ID_PLAYLIST]);

    loader = TestbedHarnessEnvironment.loader(fixture);

    fixture.detectChanges();
  });

  it('should create and redirect correctly', async () => {
    expect(component).toBeTruthy();
    expect(location.path()).toBe(`/playlist/${ID_PLAYLIST}`);
    expect(component.idPlaylist).toBe(ID_PLAYLIST);
    expect(component.checkFollowedPlaylist).toHaveBeenCalled();
  });

  it('should create playlist information section', () => {
    const playlistInformation = el.query(By.css('.playlist-information'));
    expect(playlistInformation).toBeTruthy();
  });
  it("should show playlist's image", () => {
    const playlistImage = el.query(By.css('.image-playlist'));
    expect(playlistImage).toBeTruthy();
    expect(playlistImage.attributes['src']).toBe(PLAYLIST.images[0].url);
  });
  it('should show title and artist names', () => {
    const playlistTitle = el.query(By.css('.title'));
    const playlistArtistsList = el.query(By.css('.artists'));

    expect(playlistTitle).toBeTruthy();
    expect(playlistArtistsList).toBeTruthy();
    expect(playlistArtistsList.nativeElement.textContent).toBe('The chillest beats to help you relax, study, code, and focus.•4,792,780 followers•Spotify songs');
  });

  it('should display correctly the buttons', async () => {
    const buttons = await loader.getAllHarnesses(MatButtonHarness.with({ selector: '[mat-raised-button]' }));

    expect(buttons).toBeTruthy();
    expect(buttons.length).toBe(2);
  });

  it('should display correctly the tracks', () => {
    const tracks = el.queryAll(By.css('.track'));

    expect(tracks.length).toBe(3);

    const firstTrack = tracks[0];
    const trackIndex = firstTrack.query(By.css('.index'));
    const trackName = firstTrack.query(By.css('.track-name'));
    const trackArtist = firstTrack.query(By.css('.track-artist'));
    const trackDuration = firstTrack.query(By.css('.track-duration'));

    expect(trackIndex.nativeElement.textContent).toBe('1');
    expect(trackName.nativeElement.textContent).toContain('Through The Window');
    expect(trackArtist.nativeElement.textContent).toBe('BLVKSHP');
    expect(trackDuration.nativeElement.textContent).toBe('02:46');
  });

  it('should get image from playlist', () => {
    const image = component.getImage(PLAYLIST);

    expect(image).toBe(PLAYLIST.images[0].url);
  });

  it('should check if playlist was already followd', () => {
    component.checkFollowedPlaylist(ID_USER, PLAYLIST.id);

    expect(component.isPlaylistFollowed).toBeTrue();
    expect(component.isPlaylistNotFollowed).toBeFalse();
  });

  it('should deactivate the buttons when an error appears while checking followd playlists', async () => {
    (playlistService.checkFollowedPlaylist as jasmine.Spy).and.returnValue(throwError(() => new Error('error')));
    component.checkFollowedPlaylist(ID_USER, PLAYLIST.id);

    expect(component.isPlaylistFollowed).toBeTrue();
    expect(component.isPlaylistNotFollowed).toBeTrue();

    const buttons = await loader.getAllHarnesses(MatButtonHarness.with({ selector: '[mat-raised-button]' }));

    buttons.forEach(async (button) => {
      expect(await button.isDisabled()).toBeTrue();
    });
  });

  it('should follow playlist when follow button is clicked', async () => {
    component.isPlaylistFollowed = false;

    spyOn(component, 'followPlaylist').and.callThrough();
    const buttons = await loader.getAllHarnesses(MatButtonHarness.with({ selector: '[mat-raised-button]' }));

    const followButton = buttons[0];

    expect(snackbar.open).not.toHaveBeenCalled();

    await followButton.click();
    fixture.detectChanges();

    expect(component.followPlaylist).toHaveBeenCalled();
    expect(component.isPlaylistFollowed).toBeTrue();

    expect(snackbar.open).toHaveBeenCalled();

    expect(await followButton.isDisabled()).toBeTrue();
  });

  it('should unfollow playlist when unfollow button is clicked', async () => {
    component.isPlaylistNotFollowed = false;

    spyOn(component, 'unfollowPlaylist').and.callThrough();
    const buttons = await loader.getAllHarnesses(MatButtonHarness.with({ selector: '[mat-raised-button]' }));

    const unfollowButton = buttons[1];

    expect(snackbar.open).not.toHaveBeenCalled();

    await unfollowButton.click();
    fixture.detectChanges();

    expect(component.unfollowPlaylist).toHaveBeenCalled();
    expect(component.isPlaylistNotFollowed).toBeTrue();

    expect(snackbar.open).toHaveBeenCalled();

    expect(await unfollowButton.isDisabled()).toBeTrue();
  });
});
