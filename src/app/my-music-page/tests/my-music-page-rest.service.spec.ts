import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { userAlbumsResponseMock } from 'src/Test-utilities/album-mock-data';
import { userSavedTracksMock } from 'src/Test-utilities/track-mock-data';

import { MyMusicPageRestService } from '../services/my-music-page-rest.service';

describe('MyMusicPageRestService', () => {
  let service: MyMusicPageRestService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MyMusicPageRestService],
    });
    service = TestBed.inject(MyMusicPageRestService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should prepare the correct request for getting users saved albums', () => {
    spyOn(service, 'getUsersTopAlbums').and.callThrough();
    service.getUsersTopAlbums().subscribe((results) => {
      expect(results).toBe(userAlbumsResponseMock);
    });
    const req = httpTestingController.expectOne(
      'https://api.spotify.com/v1/me/albums'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(userAlbumsResponseMock);
    expect(service.getUsersTopAlbums).toHaveBeenCalledTimes(1);
  });

  it('should prepare the correct request for getting users saved tracks', () => {
    spyOn(service, 'getUsersSavedTracks').and.callThrough();
    service.getUsersSavedTracks().subscribe((results) => {
      expect(results).toBe(userSavedTracksMock);
    });
    const req = httpTestingController.expectOne(
      'https://api.spotify.com/v1/me/tracks'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(userSavedTracksMock);
    expect(service.getUsersSavedTracks).toHaveBeenCalledTimes(1);
  });
});
