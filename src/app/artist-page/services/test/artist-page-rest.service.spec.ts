import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { albumMockData } from 'src/Test-utilities/album-mock-data';
import { artistAlbumsMock, artistDetailsMockData, artistMockData, artistRelatedArtistsMock, artistTopTrackMock } from 'src/Test-utilities/artists-mock-data';
import { trackMockData } from 'src/Test-utilities/track-mock-data';
import { ArtistPageRestService } from '../artist-page-rest.service';

describe('ArtistPageRestService', () => {
  let service: ArtistPageRestService;
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ArtistPageRestService],
    });
    service = TestBed.inject(ArtistPageRestService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should prepare the correct request for getting artist details', () => {
    spyOn(service, 'getArtistDetails').and.callThrough();
    service.getArtistDetails('mock').subscribe((results) => {
      expect(results).toBe(artistDetailsMockData);
    });
    const req = httpTestingController.expectOne(
      'https://api.spotify.com/v1/artists/mock'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(artistDetailsMockData);
    expect(service.getArtistDetails).toHaveBeenCalledOnceWith('mock');
  });

  it('should prepare the correct request for getting artist albums', () => {
    spyOn(service, 'getArtistAlbums').and.callThrough();
    service.getArtistAlbums('mock').subscribe((results) => {
      expect(results).toBe(artistAlbumsMock);
    });
    const req = httpTestingController.expectOne(
      'https://api.spotify.com/v1/artists/mock/albums?include_groups=album,single'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(artistAlbumsMock);
    expect(service.getArtistAlbums).toHaveBeenCalledOnceWith('mock');
  });

  
  it('should prepare the correct request for getting artist tracks', () => {
    spyOn(service, 'getArtistTopTracks').and.callThrough();
    service.getArtistTopTracks('mock').subscribe((results) => {
      expect(results).toBe(artistTopTrackMock);
    });
    const req = httpTestingController.expectOne(
      'https://api.spotify.com/v1/artists/mock/top-tracks?market=US'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(artistTopTrackMock);
    expect(service.getArtistTopTracks).toHaveBeenCalledOnceWith('mock');
  });

  it('should prepare the correct request for getting artist related artists', () => {
    spyOn(service, 'getArtistRelatedArtists').and.callThrough();
    service.getArtistRelatedArtists('mock').subscribe((results) => {
      expect(results).toBe(artistRelatedArtistsMock);
    });
    const req = httpTestingController.expectOne(
      'https://api.spotify.com/v1/artists/mock/related-artists'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(artistRelatedArtistsMock);
    expect(service.getArtistRelatedArtists).toHaveBeenCalledOnceWith('mock');
  });
});
