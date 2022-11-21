import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import {  topArtistResponseMock, topTracksResponseMock, userMock } from 'src/Test-utilities/user-profile-mock-data';

import { UserProfileRestService } from '../user-profile-rest.service';

describe('UserProfileRestService', () => {
  let service: UserProfileRestService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserProfileRestService],
    });
    service = TestBed.inject(UserProfileRestService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should prepare the correct get call for user', () => {
    spyOn(service, 'getProfile').and.callThrough();
    service.getProfile().subscribe((user) => {
      expect(user).toBe(userMock);
    });
    const req = httpTestingController.expectOne(
      'https://api.spotify.com/v1/me'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(userMock);
    expect(service.getProfile).toHaveBeenCalledTimes(1);
  });

  it('should prepare the correct request for the topTracks', () => {
    spyOn(service, 'getUsersTopTracks').and.callThrough();
    service.getUsersTopTracks().subscribe((tracksResponse) => {
      expect(tracksResponse).toBe(topTracksResponseMock);
    });
    const req = httpTestingController.expectOne(
      'https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=10'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(topTracksResponseMock);
    expect(service.getUsersTopTracks).toHaveBeenCalledTimes(1);
  });

  it('should prepare the correct request for the topArtists', () => {
    spyOn(service, 'getUsersTopArtists').and.callThrough();
    service.getUsersTopArtists().subscribe((artistResponse) => {
      expect(artistResponse).toBe(topArtistResponseMock);
    });
    const req = httpTestingController.expectOne(
      'https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=10'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(topArtistResponseMock);
    expect(service.getUsersTopArtists).toHaveBeenCalledTimes(1);
  });
});
