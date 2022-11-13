import { HarnessLoader } from '@angular/cdk/testing';
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
import { PlaylistService } from 'src/app/main-page/services/album.service';
import { PlaylistService } from 'src/app/main-page/services/playlist.service';
import { MaterialModule } from 'src/app/material/material.module';
import { albumWithTracksMockData } from 'src/Test-utilities/album-mock-data';

import { PlaylistDetailPageComponent } from './playlist-detail-page.component';

describe('PlaylistDetailPageComponent', () => {
  let component: PlaylistDetailPageComponent;
  let fixture: ComponentFixture<PlaylistDetailPageComponent>;

  let el: DebugElement;

  let loader: HarnessLoader;
  let router: Router;
  let albumService: PlaylistService;
  let location: Location;

  let snackbar: MatSnackBar;

  const ID_PLAYLIST = 'testParamsPlaylist';
  const PLAYLIST = playlistWithTracksMockData;

  beforeEach(async () => {
    const albumServiceSpy = jasmine.createSpyObj(PlaylistService, ['checkSavedPlaylist', 'savePlaylist', 'deletePlaylist']);
    const snackbarSpy = jasmine.createSpyObj(MatSnackBar, ['open']);

    albumServiceSpy.checkSavedPlaylist.and.returnValue(of([true]));
    albumServiceSpy.savePlaylist.and.returnValue(of([true]));
    albumServiceSpy.deletePlaylist.and.returnValue(of([true]));

    snackbarSpy.open.and.callFake(noop);

    await TestBed.configureTestingModule({
      declarations: [PlaylistDetailPageComponent],
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

    fixture = TestBed.createComponent(PlaylistDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and redirect correctly', async () => {
    expect(component).toBeTruthy();
    expect(location.path()).toBe(`/album/${ID_PLAYLIST}`);
    expect(component.idPlaylist).toBe(ID_PLAYLIST);
    expect(component.checkSavedPlaylist).toHaveBeenCalledOnceWith(component.idPlaylist);
  });

  it('should create album information section', () => {
    const albumInformation = el.query(By.css('.album-information'));
    expect(albumInformation).toBeTruthy();
  });
  it("should show album's image", () => {
    const albumImage = el.query(By.css('.image-album'));
    expect(albumImage).toBeTruthy();
    expect(albumImage.attributes['src']).toBe(PLAYLIST.images[0].url);
  });
  it('should show title and artist names', () => {
    const albumTitle = el.query(By.css('.title'));
    const albumArtistsList = el.query(By.css('.artists'));

    expect(albumTitle).toBeTruthy();
    expect(albumArtistsList).toBeTruthy();
    expect(albumArtistsList.nativeElement.textContent).toBe('Blessd•2022•13 songs•00:43:19');
  });

  it('should display correctly the buttons', async () => {
    const buttons = await loader.getAllHarnesses(MatButtonHarness.with({ selector: '[mat-raised-button]' }));

    expect(buttons).toBeTruthy();
    expect(buttons.length).toBe(2);
  });

  it('should display correctly the tracks', () => {
    const tracks = el.queryAll(By.css('.track'));

    expect(tracks.length).toBe(13);

    const firstTrack = tracks[0];
    const trackIndex = firstTrack.query(By.css('.index'));
    const trackName = firstTrack.query(By.css('.track-name'));
    const trackArtist = firstTrack.query(By.css('.track-artist'));
    const trackDuration = firstTrack.query(By.css('.track-duration'));

    expect(trackIndex.nativeElement.textContent).toBe('1');
    expect(trackName.nativeElement.textContent).toContain('Barrio Antioquia');
    expect(trackArtist.nativeElement.textContent).toBe('Blessd');
    expect(trackDuration.nativeElement.textContent).toBe('02:51');
  });

  it('should get image from album', () => {
    const image = component.getImage(PLAYLIST);

    expect(image).toBe(PLAYLIST.images[0].url);
  });

  it('should check if album was already saved', () => {
    component.checkSavedPlaylist(PLAYLIST.id);

    expect(component.isPlaylistSaved).toBeTrue();
    expect(component.isPlaylistNotSaved).toBeFalse();
  });

  it('should deactivate the buttons when an error appears while checking saved albums', async () => {
    (albumService.checkSavedPlaylist as jasmine.Spy).and.returnValue(throwError(() => new Error('error')));
    component.checkSavedPlaylist(PLAYLIST.id);

    expect(component.isPlaylistSaved).toBeTrue();
    expect(component.isPlaylistNotSaved).toBeTrue();

    const buttons = await loader.getAllHarnesses(MatButtonHarness.with({ selector: '[mat-raised-button]' }));

    buttons.forEach(async (button) => {
      expect(await button.isDisabled()).toBeTrue();
    });
  });

  it('should save album when save button is clicked', async () => {
    component.isPlaylistSaved = false;

    spyOn(component, 'savePlaylist').and.callThrough();
    const buttons = await loader.getAllHarnesses(MatButtonHarness.with({ selector: '[mat-raised-button]' }));

    const saveButton = buttons[0];

    expect(snackbar.open).not.toHaveBeenCalled();

    await saveButton.click();
    fixture.detectChanges();

    expect(component.savePlaylist).toHaveBeenCalled();
    expect(component.isPlaylistSaved).toBeTrue();

    expect(snackbar.open).toHaveBeenCalled();

    expect(await saveButton.isDisabled()).toBeTrue();
  });

  it('should delete album when delete button is clicked', async () => {
    component.isPlaylistNotSaved = false;

    spyOn(component, 'deletePlaylist').and.callThrough();
    const buttons = await loader.getAllHarnesses(MatButtonHarness.with({ selector: '[mat-raised-button]' }));

    const deleteButton = buttons[1];

    expect(snackbar.open).not.toHaveBeenCalled();

    await deleteButton.click();
    fixture.detectChanges();

    expect(component.deletePlaylist).toHaveBeenCalled();
    expect(component.isPlaylistNotSaved).toBeTrue();

    expect(snackbar.open).toHaveBeenCalled();

    expect(await deleteButton.isDisabled()).toBeTrue();
  });
});
