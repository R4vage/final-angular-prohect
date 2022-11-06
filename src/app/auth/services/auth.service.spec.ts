import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { EncriptionService } from './encription.service';
import { LocalStorageService } from './local-storage.service';
import { map, tap } from 'rxjs';

import { AuthorizationSuccess } from '../models/authorization.models';

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

  it('should throw error when state is not the correct', () => {
    const code = '1234';

    authService.getAccessToken(code, 'state2').subscribe({
      error: (err) => {
        expect(err).toBeTruthy();
      },
    });

    const req = httpTestingController.expectOne(`${URL_AUTH}/api/token`);

    expect(req.request.method).toEqual('POST');
    req.flush(request);

    expect(authService.getHeaderAccessToken).toHaveBeenCalled();
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
