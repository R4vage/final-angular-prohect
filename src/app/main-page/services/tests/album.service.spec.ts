import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Albums } from 'src/app/core/models/album.models';
import { updateSavedItem } from 'src/app/saved-store/saved-item.actions';
import {
  albumMockData,
  albumWithTracksMockData,
} from 'src/Test-utilities/album-mock-data';
import {
  savedItemsMockStore,
  topUserAlbumsStoreMock,
} from 'src/Test-utilities/store-mocks-data';

import { AlbumService } from '../album.service';

describe('AlbumService', () => {
  let albumService: AlbumService;
  let snackbar: MatSnackBar;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let store: MockStore;
  const ALBUM = albumWithTracksMockData;

  beforeEach(() => {
    const snackbarSpy = jasmine.createSpyObj(MatSnackBar, ['open']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        provideMockStore({
          initialState: {
            topUserAlbums: topUserAlbumsStoreMock,
            savedItems: savedItemsMockStore,
          },
        }),
        { provide: MatSnackBar, useValue: snackbarSpy },
      ],
    });
    albumService = TestBed.inject(AlbumService);
    snackbar = TestBed.inject(MatSnackBar);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    store = TestBed.inject(MockStore);
    spyOn(albumService, 'getAlbumReleases').and.callThrough();
  });

  it('should be created', () => {
    expect(albumService).toBeTruthy();
  });

  it('should get query parameters with default values', () => {
    const queryParameters = albumService.getQueryParametersNewReleases();
    expect(queryParameters.get('limit')).toBe('20');
    expect(queryParameters.get('offset')).toBe('0');
  });

  it('should get query parameters with limit = 10 and offset = 2', () => {
    const queryParameters = albumService.getQueryParametersNewReleases(10, 2);
    expect(queryParameters.get('limit')).toBe('10');
    expect(queryParameters.get('offset')).toBe('2');
  });

  it('should give default query parameters when given incorrect values', () => {
    const incorrectQueryParameters = albumService.getQueryParametersNewReleases(
      100,
      3
    );
    expect(incorrectQueryParameters.get('limit')).toBe('20');
    expect(incorrectQueryParameters.get('offset')).toBe('0');
  });

  it('should get album releases with default values', () => {
    const albums: Albums = {
      href: 'test.com',
      items: albumMockData,
      limit: 20,
      next: null,
      offset: 0,
      previous: null,
      total: 100,
    };

    albumService.getAlbumReleases().subscribe({
      next: (albumsData) => {
        expect(albumsData).toBeTruthy();
        expect(albumsData).toEqual(albums);
      },
    });
    const req = httpTestingController.expectOne(
      `${albumService.URL}/browse/new-releases?Content-Type=application/json&limit=20&offset=0`
    );

    expect(req.request.method).toBe('GET');
    expect(req.request.params.get('limit')).toBe('20');
    expect(req.request.params.get('offset')).toBe('0');

    req.flush({ albums });

    expect(albumService.getAlbumReleases).toHaveBeenCalledTimes(1);
  });

  it('should get album releases with specified query parameters', () => {
    const albums: Albums = {
      href: 'test.com',
      items: albumMockData,
      limit: 50,
      next: null,
      offset: 2,
      previous: null,
      total: 100,
    };

    albumService.getAlbumReleases(albums.limit, albums.offset).subscribe({
      next: (albumsData) => {
        expect(albumsData).toBeTruthy();
        expect(albumsData).toEqual(albums);
      },
    });
    const req = httpTestingController.expectOne(
      `${albumService.URL}/browse/new-releases?Content-Type=application/json&limit=${albums.limit}&offset=${albums.offset}`
    );

    expect(req.request.method).toBe('GET');
    expect(req.request.params.get('limit')).toBe(`${albums.limit}`);
    expect(req.request.params.get('offset')).toBe(`${albums.offset}`);

    req.flush({ albums });

    expect(albumService.getAlbumReleases).toHaveBeenCalledTimes(1);
  });

  it('should get album by id', () => {
    spyOn(albumService, 'getAlbum').and.callThrough();

    albumService.getAlbum(ALBUM.id).subscribe({
      next: (album) => {
        expect(album).toBeTruthy();
        expect(album).toEqual(ALBUM);
      },
      error: () => {
        fail('Expected to succeed');
      },
    });
    const req = httpTestingController.expectOne(
      `${albumService.URL}/albums/${ALBUM.id}`
    );

    expect(req.request.method).toBe('GET');

    req.flush(ALBUM);

    expect(albumService.getAlbum).toHaveBeenCalledTimes(1);
  });

  it('should fail when server gives an error while trying to get a album by id', () => {
    spyOn(albumService, 'getAlbum').and.callThrough();

    albumService.getAlbum(ALBUM.id).subscribe({
      next: (album) => {
        fail('Expected to fail');
      },
      error: (error) => {
        expect(error).toBeInstanceOf(HttpErrorResponse);
        const err: HttpErrorResponse = error;
        expect(err.status).toBe(401);
        expect(err.message).toBe(
          `Http failure response for ${albumService.URL}/albums/${ALBUM.id}: ${err.status} Failed`
        );
        expect(err.statusText).toBe('Failed');
      },
    });
    const req = httpTestingController.expectOne(
      `${albumService.URL}/albums/${ALBUM.id}`
    );

    expect(req.request.method).toBe('GET');

    req.flush('Test error', { status: 401, statusText: 'Failed' });

    expect(albumService.getAlbum).toHaveBeenCalledTimes(1);
  });

  it('should check if a album is saved', () => {
    spyOn(albumService, 'checkSavedAlbum').and.callThrough();
    albumService.checkSavedAlbum(ALBUM.id).subscribe({
      next: (album) => {
        expect(album).toBeTruthy();
        expect(album).toEqual([true]);
      },
      error: () => {
        fail('Expected to succeed');
      },
    });
    const req = httpTestingController.expectOne(
      `${albumService.URL}/me/albums/contains?ids=${ALBUM.id}`
    );
    expect(req.request.method).toBe('GET');
    req.flush([true]);
    expect(albumService.checkSavedAlbum).toHaveBeenCalledTimes(1);
  });

  it('should fail when server gives an error while trying to check if album is saved', () => {
    spyOn(albumService, 'checkSavedAlbum').and.callThrough();
    albumService.checkSavedAlbum(ALBUM.id).subscribe({
      next: () => {
        fail('Expected to fail');
      },
      error: (error) => {
        expect(error).toBeInstanceOf(HttpErrorResponse);
        const err: HttpErrorResponse = error;
        expect(err.status).toBe(401);
        expect(err.message).toBe(
          `Http failure response for ${albumService.URL}/me/albums/contains?ids=${ALBUM.id}: ${err.status} Failed`
        );
        expect(err.statusText).toBe('Failed');
      },
    });
    const req = httpTestingController.expectOne(
      `${albumService.URL}/me/albums/contains?ids=${ALBUM.id}`
    );

    expect(req.request.method).toBe('GET');
    req.flush('Test error', { status: 401, statusText: 'Failed' });
    expect(albumService.checkSavedAlbum).toHaveBeenCalledTimes(1);
  });

  it('should dispatch action to store on changeSaveState for delete', () => {
    spyOn(store, 'dispatch');
    albumService.changeAlbumState(albumMockData[0], true);
    expect(store.dispatch).toHaveBeenCalledTimes(2);
    expect(store.dispatch).toHaveBeenCalledWith(
      Object({
        id: albumMockData[0].id,
        kind: 'album',
        isSaved: false,
        type: '[SavedItem/API] Update SavedItem',
      })
    );
    expect(store.dispatch).toHaveBeenCalledWith(
      Object({
        id: albumMockData[0].id,
        type: '[TopUserAlbum/API] Delete TopUserAlbum',
      })
    );
  });

  it('should dispatch action to store on changeSaveState for save', () => {
    spyOn(store, 'dispatch');
    albumService.changeAlbumState(albumMockData[0], false);
    expect(store.dispatch).toHaveBeenCalledTimes(2);
    expect(store.dispatch).toHaveBeenCalledWith(
      Object({
        id: albumMockData[0].id,
        kind: 'album',
        isSaved: true,
        type: '[SavedItem/API] Update SavedItem',
      })
    );
    expect(store.dispatch).toHaveBeenCalledWith(
      Object({
        topUserAlbum: albumMockData[0],
        type: '[TopUserAlbum/API] Add TopUserAlbum',
      })
    );

  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
