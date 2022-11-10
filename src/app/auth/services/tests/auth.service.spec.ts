import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, tap } from 'rxjs';

import { AuthService } from '../auth.service';
import { EncriptionService } from '../encription.service';
import { LocalStorageService } from '../local-storage.service';
import { AuthorizationSuccess, RefreshResponse } from 'src/app/core/models/authorization.models';

describe('AuthService', () => {
  let authService: AuthService;
  let encryptService: EncriptionService;
  let localStorageService: LocalStorageService;

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  const URL_AUTH = 'https://accounts.spotify.com';

  beforeEach(() => {
    const encryptServiceSpy = jasmine.createSpyObj(EncriptionService, ['encodeString', 'generateCodeChallenge']);
    const localStorageServiceSpy = jasmine.createSpyObj(LocalStorageService, ['getRefreshCode']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: EncriptionService,
          useValue: encryptServiceSpy,
        },
        {
          provide: LocalStorageService,
          useValue: localStorageServiceSpy,
        },
      ],
    });
    authService = TestBed.inject(AuthService);
    encryptService = TestBed.inject(EncriptionService);
    localStorageService = TestBed.inject(LocalStorageService);

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

    spyOn(authService, 'getQueryParametersAuthUser').and.callThrough();
    (encryptService.generateCodeChallenge as jasmine.Spy).and.callFake(async (str: string) => {
      return Promise.resolve(`${str}Modified_`);
    });
    (localStorageService.getRefreshCode as jasmine.Spy).and.returnValue('refreshed');
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  it('should return url with the correct params', () => {
    authService
      .getAuthorizationUser()
      .pipe(map((url) => url.href))
      .subscribe({
        next: (url) => {
          expect(url).toContain('/authorize');
          expect(url).toContain('response_type');
          expect(url).toContain('redirect_uri');
          expect(url).toContain('state');
          expect(url).toContain('scope');
          expect(url).toContain('code_challenge_method');
          expect(url).toContain('code_challenge');
        },
      });

    expect(encryptService.generateCodeChallenge).toHaveBeenCalledTimes(1);
  });

  it('should get Access Token when given a code and a state', () => {
    spyOn(authService, 'getHeaderAccessToken');
    const code = '1234';
    const request: AuthorizationSuccess = { access_token: 'access', token_type: 'Bearer', scope: 'scope', expire_in: 3600, refresh_token: 'refresh' };
    let response: AuthorizationSuccess;
    authService.getAccessToken(code, authService.STATE).subscribe({
      next: (value) => {
        expect(value).toBeTruthy();
        response = value;
        expect(response).toEqual(request);
      },
    });

    const req = httpTestingController.expectOne(`${URL_AUTH}/api/token`);

    expect(req.request.method).toEqual('POST');
    req.flush(request);

    expect(authService.getHeaderAccessToken).toHaveBeenCalled();
  });

  it('should give an error when the state is incorrect while trying to get access token', () => {
    const code = '1234';

    authService.getAccessToken(code, 'state2').subscribe({
      next: () => {
        fail('An error was expected');
      },
      error: (err) => {
        expect(err).toBeTruthy();
        expect(err).toEqual(new Error('Something wrong happened, please try again'));
      },
    });
  });

  it('should give an error when the post request is invalid while trying to get access token', () => {
    const code = '1234';

    authService.getAccessToken(code, authService.STATE).subscribe({
      next: () => {
        fail('An error was expected');
      },
      error: (err) => {
        expect(err).toBeTruthy();
        expect(err).toBeInstanceOf(HttpErrorResponse);
      },
    });

    const req = httpTestingController.expectOne(`${URL_AUTH}/api/token`);

    expect(req.request.method).toEqual('POST');
    req.flush('Login failed', { status: 415, statusText: 'internal server error' });
  });

  it('should refresh access token when given refresh token', () => {
    spyOn(authService, 'getHeaderRefreshToken');

    const refreshToken = 'refresh';
    const refressRequest: RefreshResponse = {
      access_token: '1234',
      refresh_token: 'refresh',
      token_type: 'Bearer',
      scope: 'scope',
      expire_in: 0,
    };
    authService.refreshToken(refreshToken).subscribe({
      next: (value) => {
        expect(value).toBe(refressRequest);
      },
    });

    const req = httpTestingController.expectOne(`${URL_AUTH}/api/token`);
    expect(req.request.method).toEqual('POST');
    req.flush(refressRequest);

    expect(authService.getHeaderRefreshToken).toHaveBeenCalled();
  });

  it('should give an error when the post request is invalid while trying to refresh access token', () => {
    const refreshToken = 'refresh';
    authService.refreshToken(refreshToken).subscribe({
      next: () => {
        fail('An error was expected');
      },
      error: (err) => {
        expect(err).toBeTruthy();
        expect(err).toBeInstanceOf(HttpErrorResponse);
        expect((err as HttpErrorResponse).error).toBe('Login failed');
      },
    });

    const req = httpTestingController.expectOne(`${URL_AUTH}/api/token`);
    req.flush('Login failed', { status: 415, statusText: 'internal server error' });
  });

  afterEach(() => {
    httpTestingController.verify();
    localStorage.clear();
  });
});
