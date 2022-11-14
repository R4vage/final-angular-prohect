import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
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
import { Album } from 'src/app/core/models/album.models';
import { AlbumService } from 'src/app/main-page/services/album.service';
import { MaterialModule } from 'src/app/material/material.module';
import { AlbumTotalDurationPipe } from 'src/app/shared/pipes/album-total-duration.pipe';
import { ListArtistsPipe } from 'src/app/shared/pipes/list-artists.pipe';
import { SecondTrackMusicPipe } from 'src/app/shared/pipes/second-track-music.pipe';
import { albumWithTracksMockData } from 'src/Test-utilities/album-mock-data';
import { AlbumTracksComponent } from '../album-tracks/album-tracks.component';

import { AlbumDetailPageComponent } from './album-detail-page.component';

describe('AlbumDetailPageComponent', () => {
  let component: AlbumDetailPageComponent;
  let fixture: ComponentFixture<AlbumDetailPageComponent>;

  let el: DebugElement;

  let loader: HarnessLoader;
  let router: Router;
  let albumService: AlbumService;
  let location: Location;

  let snackbar: MatSnackBar;

  const ID_ALBUM = 'testParamsAlbum';
  const ALBUM = albumWithTracksMockData;
  beforeEach(async () => {
    const albumServiceSpy = jasmine.createSpyObj(AlbumService, ['checkSavedAlbum', 'saveAlbum', 'deleteAlbum']);
    const snackbarSpy = jasmine.createSpyObj(MatSnackBar, ['open']);

    albumServiceSpy.checkSavedAlbum.and.returnValue(of([true]));
    albumServiceSpy.saveAlbum.and.returnValue(of([true]));
    albumServiceSpy.deleteAlbum.and.returnValue(of([true]));

    snackbarSpy.open.and.callFake(noop);

    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MaterialModule,
        NoopAnimationsModule,
        RouterTestingModule.withRoutes([
          { path: 'album/:id', component: AlbumDetailPageComponent },
          { path: 'album', component: AlbumDetailPageComponent },
        ]),
      ],
      declarations: [AlbumDetailPageComponent, ListArtistsPipe, SecondTrackMusicPipe, AlbumTotalDurationPipe, AlbumTracksComponent],
      providers: [
        { provide: MatSnackBar, useValue: snackbarSpy },

        {
          provide: Store,
          useValue: {
            pipe(value: unknown): Observable<Album> {
              return of(ALBUM);
            },
          },
        },
        {
          provide: AlbumService,
          useValue: albumServiceSpy,
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({
              id: ID_ALBUM,
            }),
          },
        },
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(AlbumDetailPageComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;

    albumService = TestBed.inject(AlbumService);
    snackbar = TestBed.inject(MatSnackBar);

    spyOn(component, 'checkSavedAlbum').and.callThrough();

    router.initialNavigation();
    await router.navigate(['/album', ID_ALBUM]);

    loader = TestbedHarnessEnvironment.loader(fixture);

    fixture.detectChanges();
  });

  it('should create and redirect correctly', async () => {
    expect(component).toBeTruthy();
    expect(location.path()).toBe(`/album/${ID_ALBUM}`);
    expect(component.idAlbum).toBe(ID_ALBUM);
    expect(component.checkSavedAlbum).toHaveBeenCalledOnceWith(component.idAlbum);
  });

  it('should create album information section', () => {
    const albumInformation = el.query(By.css('.album-information'));
    expect(albumInformation).toBeTruthy();
  });
  it("should show album's image", () => {
    const albumImage = el.query(By.css('.image-album'));
    expect(albumImage).toBeTruthy();
    expect(albumImage.attributes['src']).toBe(ALBUM.images[0].url);
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
    const image = component.getImage(ALBUM);

    expect(image).toBe(ALBUM.images[0].url);
  });

  it('should check if album was already saved', () => {
    component.checkSavedAlbum(ALBUM.id);

    expect(component.isAlbumSaved).toBeTrue();
    expect(component.isAlbumNotSaved).toBeFalse();
  });

  it('should deactivate the buttons when an error appears while checking saved albums', async () => {
    (albumService.checkSavedAlbum as jasmine.Spy).and.returnValue(throwError(() => new Error('error')));
    component.checkSavedAlbum(ALBUM.id);

    expect(component.isAlbumSaved).toBeTrue();
    expect(component.isAlbumNotSaved).toBeTrue();

    const buttons = await loader.getAllHarnesses(MatButtonHarness.with({ selector: '[mat-raised-button]' }));

    buttons.forEach(async (button) => {
      expect(await button.isDisabled()).toBeTrue();
    });
  });

  it('should save album when save button is clicked', async () => {
    component.isAlbumSaved = false;

    spyOn(component, 'saveAlbum').and.callThrough();
    const buttons = await loader.getAllHarnesses(MatButtonHarness.with({ selector: '[mat-raised-button]' }));

    const saveButton = buttons[0];

    expect(snackbar.open).not.toHaveBeenCalled();

    await saveButton.click();
    fixture.detectChanges();

    expect(component.saveAlbum).toHaveBeenCalled();
    expect(component.isAlbumSaved).toBeTrue();

    expect(snackbar.open).toHaveBeenCalled();

    expect(await saveButton.isDisabled()).toBeTrue();
  });

  it('should delete album when delete button is clicked', async () => {
    component.isAlbumNotSaved = false;

    spyOn(component, 'deleteAlbum').and.callThrough();
    const buttons = await loader.getAllHarnesses(MatButtonHarness.with({ selector: '[mat-raised-button]' }));

    const deleteButton = buttons[1];

    expect(snackbar.open).not.toHaveBeenCalled();

    await deleteButton.click();
    fixture.detectChanges();

    expect(component.deleteAlbum).toHaveBeenCalled();
    expect(component.isAlbumNotSaved).toBeTrue();

    expect(snackbar.open).toHaveBeenCalled();

    expect(await deleteButton.isDisabled()).toBeTrue();
  });
});
