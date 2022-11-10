import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Albums } from 'src/app/core/models/album.models';
import { albumMockData } from 'src/Test-utilities/album-mock-data';

import { AlbumService } from '../album.service';

describe('AlbumService', () => {
  let albumService: AlbumService;

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [],
    });
    albumService = TestBed.inject(AlbumService);

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

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
    const incorrectQueryParameters = albumService.getQueryParametersNewReleases(100, 3);
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
    const req = httpTestingController.expectOne(`${albumService.URL}/browse/new-releases?Content-Type=application/json&limit=20&offset=0`);

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
    const req = httpTestingController.expectOne(`${albumService.URL}/browse/new-releases?Content-Type=application/json&limit=${albums.limit}&offset=${albums.offset}`);

    expect(req.request.method).toBe('GET');
    expect(req.request.params.get('limit')).toBe(`${albums.limit}`);
    expect(req.request.params.get('offset')).toBe(`${albums.offset}`);

    req.flush({ albums });

    expect(albumService.getAlbumReleases).toHaveBeenCalledTimes(1);
  });
});
