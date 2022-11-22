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
import { Actions } from '@ngrx/effects';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { noop, of } from 'rxjs';
import { PlaylistService } from 'src/app/main-page/services/playlist.service';
import { MaterialModule } from 'src/app/material/material.module';
import { TracksListComponent } from 'src/app/shared/modules/tracks-list/tracks-list.component';
import { ListArtistsPipe } from 'src/app/shared/pipes/list-artists.pipe';
import { SecondTrackMusicPipe } from 'src/app/shared/pipes/second-track-music.pipe';
import { TracksFromPlaylistPipe } from 'src/app/shared/pipes/tracks-from-playlist.pipe';
import { TrackService } from 'src/app/track-detail-page/services/track.service';
import { TrackItemComponentMock } from 'src/Test-utilities/mockedComponents/item-track-mock.component';
import {
  playlistMockItem,
  playlistsMockStore,
  savedItemsMockStore,
} from 'src/Test-utilities/store-mocks-data';
import { PlaylistDetailPageComponent } from './playlist-detail-page.component';

describe('PlaylistDetailPageComponent', () => {
  let component: PlaylistDetailPageComponent;
  let fixture: ComponentFixture<PlaylistDetailPageComponent>;
  let el: DebugElement;
  let loader: HarnessLoader;
  let router: Router;
  let playlistService: PlaylistService;
  let location: Location;
  let actions: Actions;
  let snackbar: MatSnackBar;
  let store: MockStore;
  const ID_PLAYLIST = 'testParamsPlaylist';
  const ID_USER = 'testman';
  const PLAYLIST = playlistMockItem;

  beforeEach(async () => {
    const playlistServiceSpy = jasmine.createSpyObj(PlaylistService, [
      'checkFollowedPlaylist',
      'followPlaylist',
      'unfollowPlaylist',
      'changePlayStoreState',
    ]);
    const trackServiceSpy = jasmine.createSpyObj(TrackService, [
      'checkSavedTrack',
      'saveTrack',
      'deleteTrack',
    ]);
    const actionsSpy = jasmine.createSpyObj(Actions, ['pipe']);
    actionsSpy.pipe.and.returnValue(of(true));
    const snackbarSpy = jasmine.createSpyObj(MatSnackBar, ['open']);

    playlistServiceSpy.checkFollowedPlaylist.and.returnValue(of([true]));
    playlistServiceSpy.followPlaylist.and.returnValue(of([true]));
    playlistServiceSpy.unfollowPlaylist.and.returnValue(of([true]));

    trackServiceSpy.checkSavedTrack.and.returnValue(of([true, true, true]));

    snackbarSpy.open.and.callFake(noop);

    await TestBed.configureTestingModule({
      declarations: [
        PlaylistDetailPageComponent,
        TracksFromPlaylistPipe,
        SecondTrackMusicPipe,
        ListArtistsPipe,
        TracksListComponent,
        TrackItemComponentMock,
      ],
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
        { provide: Actions, useValue: actionsSpy },
        provideMockStore({
          initialState: {
            savedItems: savedItemsMockStore,
            playlists: playlistsMockStore,
          },
        }),
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
    actions = TestBed.inject(Actions);
    fixture = TestBed.createComponent(PlaylistDetailPageComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;

    playlistService = TestBed.inject(PlaylistService);
    snackbar = TestBed.inject(MatSnackBar);

    router.initialNavigation();
    await router.navigate(['/playlist', ID_PLAYLIST]);

    loader = TestbedHarnessEnvironment.loader(fixture);

    fixture.detectChanges();
  });

  it('should create and redirect correctly', async () => {
    expect(component).toBeTruthy();
    expect(location.path()).toBe(`/playlist/${ID_PLAYLIST}`);
    expect(component.idPlaylist).toBe(ID_PLAYLIST);
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
    component.playlist$.subscribe();

    expect(playlistTitle).toBeTruthy();
    expect(playlistArtistsList).toBeTruthy();
    expect(playlistArtistsList.nativeElement.textContent).toBe(
      'Hacele honor al domingo y terminalo bien arriba.•2 followers•Spotify songs'
    );
  });

  it('should display correctly the buttons', async () => {
    const buttons = await loader.getAllHarnesses(
      MatButtonHarness.with({ selector: '[mat-raised-button]' })
    );

    expect(buttons).toBeTruthy();
    expect(buttons.length).toBe(1);
  });

  it('should get image from playlist', () => {
    const image = component.getImage(PLAYLIST);
    expect(image).toBe(PLAYLIST.images[0].url);
  });

  it('should follow playlist when follow button is clicked', async () => {
    const followButton = await loader.getHarness(
      MatButtonHarness.with({ selector: '[mat-raised-button]' })
    );
    await followButton.click();
    fixture.detectChanges();
    expect(playlistService.changePlayStoreState).toHaveBeenCalledOnceWith(
      ID_PLAYLIST,
      false
    );
    expect(await followButton.isDisabled()).toBeFalse();
  });

  it('should unfollow playlist when unfollow button is clicked', async () => {
    component.isSaved = true;
    spyOn(component, 'clickFollowButton').and.callThrough();
    const unfollowButton = await loader.getHarness(
      MatButtonHarness.with({ selector: '[mat-raised-button]' })
    );
    await unfollowButton.click();
    fixture.detectChanges();
    expect(component.clickFollowButton).toHaveBeenCalled();
    expect(playlistService.changePlayStoreState).toHaveBeenCalledOnceWith(
      ID_PLAYLIST,
      true
    );
    expect(await unfollowButton.isDisabled()).toBeFalse();
  });
});
