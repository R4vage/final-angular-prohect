import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectIdUser } from 'src/app/user-profile/user-profile-store/selectors/user.selectors';
import { userStoreMock } from 'src/Test-utilities/store-mocks-data';
import { storesSelectorsMock } from 'src/Test-utilities/stores-selectors-mock';
import { SavedItemRestService } from '../saved-item-rest.service';

describe('SavedItemRestService', () => {
  let service: SavedItemRestService;
  let httpTestingController: HttpTestingController;
  let store: MockStore
  beforeEach(() => {
    TestBed.configureTestingModule({

      imports: [HttpClientTestingModule],
      providers: [
        SavedItemRestService,
        provideMockStore({
          initialState: {
            user: userStoreMock
          },
        })
      ]
    });
    service = TestBed.inject(SavedItemRestService);
    httpTestingController = TestBed.inject(HttpTestingController);
    store = TestBed.inject(MockStore)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should prepare request for checking user saved tracks', () => {
    spyOn(service, 'checkUserSavedTracks').and.callThrough();
    service.checkUserSavedTracks(['mock']).subscribe((results) => {
      expect(results).toEqual([true]);
    });
    const req = httpTestingController.expectOne(
      'https://api.spotify.com/v1/me/tracks/contains?ids=mock'
    );
    expect(req.request.method).toEqual('GET');
    req.flush([true]);
    expect(service.checkUserSavedTracks).toHaveBeenCalledOnceWith(['mock']);
  });

  it('should prepare request for checking user saved albums', () => {
    spyOn(service, 'checkUserSavedAlbums').and.callThrough();
    service.checkUserSavedAlbums(['mock']).subscribe((results) => {
      expect(results).toEqual([true]);
    });
    const req = httpTestingController.expectOne(
      'https://api.spotify.com/v1/me/albums/contains?ids=mock'
    );
    expect(req.request.method).toEqual('GET');
    req.flush([true]);
    expect(service.checkUserSavedAlbums).toHaveBeenCalledOnceWith(['mock']);
  });

  it('should prepare request for checking users followed artists', () => {
    spyOn(service, 'checkUsersFollowedArtists').and.callThrough();
    service.checkUsersFollowedArtists(['mock']).subscribe((results) => {
      expect(results).toEqual([true]);
    });
    const req = httpTestingController.expectOne(
      'https://api.spotify.com/v1/me/following/contains?ids=mock&type=artist'
    );
    expect(req.request.method).toEqual('GET');
    req.flush([true]);
    expect(service.checkUsersFollowedArtists).toHaveBeenCalledOnceWith(['mock']);
  });

  it('should prepare request for checking if user follows playlist', () => {
    spyOn(service, 'checkUsersPlaylist').and.callThrough();
    service.checkUsersPlaylist('mock').subscribe((results) => {
      expect(results).toEqual([true]);
    });
    const req = httpTestingController.expectOne(
      'https://api.spotify.com/v1/playlists/mock/followers/contains?ids=kme8nnikb0ylimns97in2bwkz' /* UserId is inside mockedStore */
    );
    expect(req.request.method).toEqual('GET');
    req.flush([true]);
    expect(service.checkUsersPlaylist).toHaveBeenCalledOnceWith('mock');
  });

  it('should prepare request for saving track', () => {
    spyOn(service, 'saveTrack').and.callThrough();
    service.saveTrack('mock').subscribe((results) => {
      expect(results).toEqual();
    });
    const req = httpTestingController.expectOne(
      'https://api.spotify.com/v1/me/tracks?ids=mock' 
    );
    expect(req.request.method).toEqual('PUT');
    expect(req.request.body).toEqual('')
    expect(service.saveTrack).toHaveBeenCalledOnceWith('mock');
  });

  it('should prepare request for removing track', () => {
    spyOn(service, 'removeTrack').and.callThrough();
    service.removeTrack('mock').subscribe((results) => {
      expect(results).toEqual();
    });
    const req = httpTestingController.expectOne(
      'https://api.spotify.com/v1/me/tracks?ids=mock'
    );
    expect(req.request.method).toEqual('DELETE');
    expect(service.removeTrack).toHaveBeenCalledOnceWith('mock');
  });

  it('should prepare request for saving album', () => {
    spyOn(service, 'saveAlbum').and.callThrough();
    service.saveAlbum('mock').subscribe((results) => {
      expect(results).toEqual();
    });
    const req = httpTestingController.expectOne(
      'https://api.spotify.com/v1/me/albums?ids=mock'
    );
    expect(req.request.method).toEqual('PUT');
    expect(req.request.body).toEqual('')
    expect(service.saveAlbum).toHaveBeenCalledOnceWith('mock');
  });

  it('should prepare request for removing album', () => {
    spyOn(service, 'removeAlbum').and.callThrough();
    service.removeAlbum('mock').subscribe((results) => {
      expect(results).toEqual();
    });
    const req = httpTestingController.expectOne(
      'https://api.spotify.com/v1/me/albums?ids=mock'
    );
    expect(req.request.method).toEqual('DELETE');
    expect(service.removeAlbum).toHaveBeenCalledOnceWith('mock');
  });

  it('should prepare request for following playlist', () => {
    spyOn(service, 'followPlaylist').and.callThrough();
    service.followPlaylist('mock').subscribe((results) => {
      expect(results).toEqual();
    });
    const req = httpTestingController.expectOne(
      'https://api.spotify.com/v1/playlists/mock/followers'
    );
    expect(req.request.method).toEqual('PUT');
    expect(service.followPlaylist).toHaveBeenCalledOnceWith('mock');
  });

  it('should prepare request for unfollowing playlist', () => {
    spyOn(service, 'removePlaylist').and.callThrough();
    service.removePlaylist('mock').subscribe((results) => {
      expect(results).toEqual();
    });
    const req = httpTestingController.expectOne(
      'https://api.spotify.com/v1/playlists/mock/followers'
    );
    expect(req.request.method).toEqual('DELETE');
    expect(service.removePlaylist).toHaveBeenCalledOnceWith('mock');
  });

  it('should prepare request for following artist', () => {
    spyOn(service, 'followArtist').and.callThrough();
    service.followArtist('mock').subscribe((results) => {
      expect(results).toEqual();
    });
    const req = httpTestingController.expectOne(
      'https://api.spotify.com/v1/me/following?type=artist&ids=mock'
    );
    expect(req.request.method).toEqual('PUT');
    expect(service.followArtist).toHaveBeenCalledOnceWith('mock');
  });

  it('should prepare request for following artist', () => {
    spyOn(service, 'followArtist').and.callThrough();
    service.followArtist('mock').subscribe((results) => {
      expect(results).toEqual();
    });
    const req = httpTestingController.expectOne(
      'https://api.spotify.com/v1/me/following?type=artist&ids=mock'
    );
    expect(req.request.method).toEqual('PUT');
    expect(service.followArtist).toHaveBeenCalledOnceWith('mock');
  });

  it('should return album endpoint if called with an album', () => {
    spyOn(service, 'checkUserSavedAlbums')
    service.getProperCheckEndpoint(['mock'], 'album');
    expect(service.checkUserSavedAlbums).toHaveBeenCalledOnceWith(['mock']);
  })

  it('should return artist endpoint if called with an artist', () => {
    spyOn(service, 'checkUsersFollowedArtists')
    service.getProperCheckEndpoint(['mock'], 'artist');
    expect(service.checkUsersFollowedArtists).toHaveBeenCalledOnceWith(['mock']);
  })

  it('should return track endpoint if called with a track', () => {
    spyOn(service, 'checkUserSavedTracks')
    service.getProperCheckEndpoint(['mock'], 'track');
    expect(service.checkUserSavedTracks).toHaveBeenCalledOnceWith(['mock']);
  })

  it('should return playlist endpoint if called with a playlist', () => {
    spyOn(service, 'checkUsersPlaylist')
    service.getProperCheckEndpoint(['mock'], 'playlist');
    expect(service.checkUsersPlaylist).toHaveBeenCalledOnceWith('mock');
  })

  it('should get the proper endpoint for saving', () => {
    spyOn(service, 'followArtist')
    service.getProperSaveEndpoint('mock', 'artist', true);
    expect(service.followArtist).toHaveBeenCalledOnceWith('mock')
  })
});
