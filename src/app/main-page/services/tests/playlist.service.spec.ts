import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { provideMockStore } from '@ngrx/store/testing';
import { Playlists } from 'src/app/core/models/playlist.models';
import { playlistsMockData } from 'src/Test-utilities/playlist-mock-data';
import { savedItemsMockStore } from 'src/Test-utilities/store-mocks-data';

import { PlaylistService } from '../playlist.service';

describe('PlaylistService', () => {
  let playlistService: PlaylistService;
  let snackbar: MatSnackBar;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    const snackbarSpy = jasmine.createSpyObj(snackbar, ['open'])
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        provideMockStore({
          initialState:{
            savedItems: savedItemsMockStore
          }
        }),
        {provide: MatSnackBar, useValue:snackbarSpy}
      ],
    });
    playlistService = TestBed.inject(PlaylistService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

    spyOn(playlistService, 'getFeaturedPlaylists').and.callThrough();
  });

  it('should be created', () => {
    expect(playlistService).toBeTruthy();
  });

  it('should get query parameters with default values', () => {
    const queryParameters = playlistService.getQueryParametersFeaturedPlaylists();
    expect(queryParameters.get('limit')).toBe('20');
    expect(queryParameters.get('offset')).toBe('0');
  });

  it('should get query parameters with limit = 10 and offset = 2', () => {
    const queryParameters = playlistService.getQueryParametersFeaturedPlaylists(10, 2);
    expect(queryParameters.get('limit')).toBe('10');
    expect(queryParameters.get('offset')).toBe('2');
  });

  it('should give default query parameters when given incorrect values', () => {
    const incorrectQueryParameters = playlistService.getQueryParametersFeaturedPlaylists(100, 3);
    expect(incorrectQueryParameters.get('limit')).toBe('20');
    expect(incorrectQueryParameters.get('offset')).toBe('0');
  });

  it('should get playlist releases with default values', () => {
    const playlists: Playlists = {
      href: 'test.com',
      items: playlistsMockData,
      limit: 20,
      next: null,
      offset: 0,
      previous: null,
      total: 100,
    };

    playlistService.getFeaturedPlaylists().subscribe({
      next: (playlistsData) => {
        expect(playlistsData).toBeTruthy();
        expect(playlistsData).toEqual(playlists);
      },
    });
    const req = httpTestingController.expectOne(`${playlistService.URL}/browse/featured-playlists?Content-Type=application/json&limit=20&offset=0`);

    expect(req.request.method).toBe('GET');
    expect(req.request.params.get('limit')).toBe('20');
    expect(req.request.params.get('offset')).toBe('0');

    req.flush({ playlists });

    expect(playlistService.getFeaturedPlaylists).toHaveBeenCalledTimes(1);
  });

  it('should get playlist releases with specified query parameters', () => {
    const playlists: Playlists = {
      href: 'test.com',
      items: playlistsMockData,
      limit: 50,
      next: null,
      offset: 2,
      previous: null,
      total: 100,
    };

    playlistService.getFeaturedPlaylists(playlists.limit, playlists.offset).subscribe({
      next: (playlistsData) => {
        expect(playlistsData).toBeTruthy();
        expect(playlistsData).toEqual(playlists);
      },
    });
    const req = httpTestingController.expectOne(
      `${playlistService.URL}/browse/featured-playlists?Content-Type=application/json&limit=${playlists.limit}&offset=${playlists.offset}`
    );

    expect(req.request.method).toBe('GET');
    expect(req.request.params.get('limit')).toBe(`${playlists.limit}`);
    expect(req.request.params.get('offset')).toBe(`${playlists.offset}`);

    req.flush({ playlists });

    expect(playlistService.getFeaturedPlaylists).toHaveBeenCalledTimes(1);
  });
});
