import { HttpClient, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { delay, noop, of, throwError } from 'rxjs';
import { initialAuthState } from 'src/app/auth/auth-store/reducers';
import { AuthService } from 'src/app/auth/services/auth.service';
import { LocalStorageService } from 'src/app/auth/services/local-storage.service';
import { AlbumService } from 'src/app/main-page/services/album.service';
import { AuthorizationSuccess } from '../models/authorization.models';

import { logOut } from 'src/app/auth/auth-store/auth.actions';
import { RefreshResponse } from 'src/app/core/models/authorization.models';
import { Albums } from '../models/album.models';
import { TokenInterceptor } from './token.interceptor';

describe('TokenInterceptor', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let interceptor: TokenInterceptor;

  let authService: AuthService;
  let albumService: AlbumService;

  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TokenInterceptor,
        LocalStorageService,
        AuthService,
        AlbumService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true,
        },
        provideMockStore({ initialState: initialAuthState }),
      ],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

    authService = TestBed.inject(AuthService);
    albumService = TestBed.inject(AlbumService);

    store = TestBed.inject(MockStore);

    interceptor = TestBed.inject(TokenInterceptor);

    localStorage.setItem('accessToken', 'testAccessToken');

    spyOn(albumService, 'getAlbumReleases').and.callThrough();
    spyOn(store, 'dispatch').and.callFake(noop);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it("should not add a header when the http request is with 'accounts.spotify'", () => {
    spyOn(authService, 'getHeaderAccessToken').and.callFake((clientId, secretId) => {
      return new HttpHeaders();
    });
    const code = '1234';
    const request: AuthorizationSuccess = { access_token: 'access', token_type: 'Bearer', scope: 'scope', expire_in: 3600, refresh_token: 'refresh' };
    spyOn(authService, 'getAccessToken').and.callThrough();

    authService.getAccessToken(code, authService.STATE).subscribe({
      next: (value) => {
        expect(value).toBeTruthy();
      },
      error: () => {
        fail('It should be a successful request');
      },
    });

    const req = httpTestingController.expectOne(`${authService.URL}/api/token`);

    expect(req.request.method).toEqual('POST');
    expect(req.request.headers.has('Authorization')).toBeFalse();
    expect(req.request.headers.get('Authorization')).toBeFalsy();
    req.flush(request);

    expect(authService.getAccessToken).toHaveBeenCalledTimes(1);
  });

  it('should add a header with the access token', () => {
    const response = { albums: {} as Albums };

    albumService.getAlbumReleases().subscribe({
      next: (value) => {
        expect(value).toBeTruthy();
      },
      error: () => {
        fail('It should be a successful request');
      },
    });

    const req = httpTestingController.expectOne(`${albumService.URL}/browse/new-releases?Content-Type=application/json&limit=20&offset=0`);

    expect(req.request.method).toEqual('GET');
    expect(req.request.headers.has('Authorization')).toBeTrue();
    expect(req.request.headers.get('Authorization')).toBe('Bearer testAccessToken');
    req.flush(response);

    expect(albumService.getAlbumReleases).toHaveBeenCalledTimes(1);
  });

  it("should refresh token when error status is 401 and the http request is not with 'accounts.spotify'", () => {
    const response = { albums: {} as Albums };
    const oldRefreshToken = 'testRefreshToken';
    const refreshResponse: RefreshResponse = {
      access_token: 'newImprovedAccessToken',
      refresh_token: 'newImprovedRefreshToken',
      token_type: 'Bearer',
      scope: 'any scope',
      expire_in: 3600,
    };

    spyOn(authService, 'refreshToken').and.returnValue(of(refreshResponse));

    localStorage.setItem('refreshToken', oldRefreshToken);
    albumService.getAlbumReleases().subscribe({
      next: (album) => {
        expect(album).toEqual(response.albums);
      },
      error: () => {
        fail('Error should have been catched by the interceptor and refreshed token');
      },
    });

    const req = httpTestingController.expectOne(`${albumService.URL}/browse/new-releases?Content-Type=application/json&limit=20&offset=0`);

    expect(req.request.method).toEqual('GET');

    expect(req.request.headers.has('Authorization')).toBeTrue();
    expect(req.request.headers.get('Authorization')).toBe('Bearer testAccessToken');
    req.flush('Fail test', { status: 401, statusText: 'Auth failed' });

    expect(albumService.getAlbumReleases).toHaveBeenCalledTimes(1);
    expect(authService.refreshToken).toHaveBeenCalledOnceWith(oldRefreshToken);
    expect(localStorage.getItem('accessToken')).toBe(refreshResponse.access_token);
    expect(localStorage.getItem('refreshToken')).toBe(refreshResponse.refresh_token);

    const newReq = httpTestingController.expectOne(`${albumService.URL}/browse/new-releases?Content-Type=application/json&limit=20&offset=0`);

    expect(newReq.request.headers.has('Authorization')).toBeTrue();
    expect(newReq.request.headers.get('Authorization')).toBe(`Bearer ${refreshResponse.access_token}`);

    newReq.flush(response);
  });

  it('should throw error when error status is not 401', () => {
    const oldRefreshToken = 'testRefreshToken';

    localStorage.setItem('refreshToken', oldRefreshToken);
    albumService.getAlbumReleases().subscribe({
      next: () => {
        fail('Error should have not been catched by the interceptor and refreshed token');
      },
      error: (error) => {
        expect(error).toBeTruthy();
        expect(error?.status).toBe(500);
        expect(error?.error).toBe('Fail test');
      },
    });

    const req = httpTestingController.expectOne(`${albumService.URL}/browse/new-releases?Content-Type=application/json&limit=20&offset=0`);

    expect(req.request.method).toEqual('GET');

    expect(req.request.headers.has('Authorization')).toBeTrue();
    expect(req.request.headers.get('Authorization')).toBe('Bearer testAccessToken');
    req.flush('Fail test', { status: 500, statusText: 'Auth failed' });

    expect(albumService.getAlbumReleases).toHaveBeenCalledTimes(1);
  });

  it("should throw error when the http request is with 'accounts.spotify'", () => {
    const oldRefreshToken = 'testRefreshToken';
    const refreshResponse: RefreshResponse = {
      access_token: 'newImprovedAccessToken',
      refresh_token: 'newImprovedRefreshToken',
      token_type: 'Bearer',
      scope: 'any scope',
      expire_in: 3600,
    };
    const code = '1234';

    localStorage.setItem('refreshToken', oldRefreshToken);

    spyOn(authService, 'refreshToken').and.returnValue(of(refreshResponse));
    spyOn(authService, 'getAccessToken').and.callThrough();
    spyOn(authService, 'getHeaderAccessToken').and.callFake((clientId, secretId) => {
      return new HttpHeaders();
    });

    authService.getAccessToken(code, authService.STATE).subscribe({
      next: () => {
        fail('Error should have not been catched by the interceptor and refreshed token');
      },
      error: (error) => {
        expect(error).toBeTruthy();
        expect(error?.status).toBe(500);
        expect(error?.error).toBe('Fail test');
      },
    });

    const req = httpTestingController.expectOne(`${authService.URL}/api/token`);

    expect(req.request.method).toEqual('POST');
    expect(req.request.headers.has('Authorization')).toBeFalse();

    req.flush('Fail test', { status: 500, statusText: 'Auth failed' });

    expect(authService.refreshToken).not.toHaveBeenCalled();
    expect(authService.getAccessToken).toHaveBeenCalledTimes(1);
  });

  it('should refresh token only one time even if there is multiple http requests', fakeAsync(() => {
    const response = { albums: {} as Albums };
    const oldRefreshToken = 'testRefreshToken';
    const refreshResponse: RefreshResponse = {
      access_token: 'newImprovedAccessToken',
      refresh_token: 'newImprovedRefreshToken',
      token_type: 'Bearer',
      scope: 'any scope',
      expire_in: 3600,
    };

    spyOn(authService, 'refreshToken').and.returnValue(of(refreshResponse));

    localStorage.setItem('refreshToken', oldRefreshToken);
    albumService
      .getAlbumReleases()
      .pipe(delay(400))
      .subscribe({
        next: (album) => {
          expect(album).toEqual(response.albums);
        },
        error: () => {
          fail('Error should have been catched by the interceptor and refreshed token');
        },
      });

    albumService
      .getAlbumReleases()
      .pipe(delay(405))
      .subscribe({
        next: (album) => {
          expect(album).toEqual(response.albums);
        },
        error: () => {
          fail('Error should have been catched by the interceptor and refreshed token');
        },
      });

    const matchRequests = httpTestingController.match(`${albumService.URL}/browse/new-releases?Content-Type=application/json&limit=20&offset=0`);
    const firstReq = matchRequests[0];
    const secondReq = matchRequests[1];

    expect(firstReq.request.method).toEqual('GET');
    expect(secondReq.request.method).toEqual('GET');

    expect(firstReq.request.headers.has('Authorization')).toBeTrue();
    expect(secondReq.request.headers.has('Authorization')).toBeTrue();
    expect(firstReq.request.headers.get('Authorization')).toBe('Bearer testAccessToken');
    expect(secondReq.request.headers.get('Authorization')).toBe('Bearer testAccessToken');
    firstReq.flush('Fail test', { status: 401, statusText: 'Auth failed' });
    secondReq.flush('Fail test', { status: 401, statusText: 'Auth failed' });

    expect(albumService.getAlbumReleases).toHaveBeenCalledTimes(2);
    expect(authService.refreshToken).toHaveBeenCalledOnceWith(oldRefreshToken);

    expect(localStorage.getItem('accessToken')).toBe(refreshResponse.access_token);
    expect(localStorage.getItem('refreshToken')).toBe(refreshResponse.refresh_token);

    expect();

    const newMatchRequests = httpTestingController.match(`${albumService.URL}/browse/new-releases?Content-Type=application/json&limit=20&offset=0`);
    const newReqfirst = newMatchRequests[0];
    const newReqsecond = newMatchRequests[1];

    expect(newReqfirst.request.headers.has('Authorization')).toBeTrue();
    expect(newReqsecond.request.headers.has('Authorization')).toBeTrue();
    expect(newReqfirst.request.headers.get('Authorization')).toBe(`Bearer ${refreshResponse.access_token}`);
    expect(newReqsecond.request.headers.get('Authorization')).toBe(`Bearer ${refreshResponse.access_token}`);

    newReqfirst.flush(response);
    newReqsecond.flush(response);

    tick(405);
  }));

  it('should log out when the token was not refreshed', () => {
    const errorObs = throwError(() => new Error('Refresh has failed'));
    const oldRefreshToken = 'testRefreshToken';

    spyOn(authService, 'refreshToken').and.returnValue(errorObs);

    localStorage.setItem('refreshToken', oldRefreshToken);
    albumService
      .getAlbumReleases()
      .pipe(delay(400))
      .subscribe({
        next: () => {
          fail('Expected an error');
        },
        error: (error) => {
          expect(error).toBeTruthy();
        },
      });

    const req = httpTestingController.expectOne(`${albumService.URL}/browse/new-releases?Content-Type=application/json&limit=20&offset=0`);

    expect(req.request.method).toEqual('GET');

    expect(req.request.headers.has('Authorization')).toBeTrue();
    expect(req.request.headers.get('Authorization')).toBe('Bearer testAccessToken');
    req.flush('Fail test', { status: 401, statusText: 'Auth failed' });

    expect(albumService.getAlbumReleases).toHaveBeenCalled();
    expect(authService.refreshToken).toHaveBeenCalledOnceWith(oldRefreshToken);

    expect(store.dispatch).toHaveBeenCalledWith(logOut());
  });

  afterEach(() => {
    httpTestingController.verify();
    localStorage.clear();
  });
});
