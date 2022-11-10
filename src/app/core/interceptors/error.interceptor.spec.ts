import { HttpClient, HttpErrorResponse, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { tap } from 'rxjs';
import { initialAuthState } from 'src/app/auth/auth-store/reducers';
import { AuthService } from 'src/app/auth/services/auth.service';

import { ErrorInterceptor } from './error.interceptor';
import { TokenInterceptor } from './token.interceptor';

describe('ErrorInterceptor', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let interceptor: ErrorInterceptor;

  let authService: AuthService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ErrorInterceptor,
        AuthService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ErrorInterceptor,
          multi: true,
        },
        provideMockStore({ initialState: initialAuthState }),
      ],
    });
    interceptor = TestBed.inject(ErrorInterceptor);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

    authService = TestBed.inject(AuthService);

    spyOn(interceptor, 'intercept').and.callThrough();
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should return a throwError Observable with the correct message', () => {
    spyOn(authService, 'getHeaderAccessToken').and.callFake((clientId, secretId) => {
      return new HttpHeaders();
    });
    const code = '1234';
    spyOn(authService, 'getAccessToken').and.callThrough();

    authService
      .getAccessToken(code, authService.STATE)

      .subscribe({
        next: (a) => {
          fail('It should have failed');
        },
        error: (error) => {
          console.log(error);
          expect(error).toBeTruthy();
          expect(error).toBeInstanceOf(String);

          const errorStatus = (error as string).split('\n')[0];
          expect(errorStatus).toBe('Error Status: 500');

          const errorMessage = (error as string).split('\n')[1];
          expect(errorMessage).toBe('Message: Http failure response for https://accounts.spotify.com/api/token: 500 Auth failed');
        },
      });

    const req = httpTestingController.expectOne(`${authService.URL}/api/token`);

    expect(req.request.method).toEqual('POST');

    req.flush('Fail test', { status: 500, statusText: 'Auth failed' });

    expect(authService.getAccessToken).toHaveBeenCalledTimes(1);

    const secondReq = httpTestingController.expectOne(`${authService.URL}/api/token`);

    secondReq.flush('Fail test', { status: 500, statusText: 'Auth failed' });
  });
  afterEach(() => {
    httpTestingController.verify();
  });
});
