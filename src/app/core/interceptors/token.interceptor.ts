import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { catchError, Observable, switchMap, tap } from 'rxjs';
import { LocalStorageService } from 'src/app/auth/services/local-storage.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AuthState } from 'src/app/auth/auth-store/reducers';
import { Store } from '@ngrx/store';
import { logOut } from 'src/app/auth/auth-store/auth.actions';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  count = 0;
  constructor(private localStorageService: LocalStorageService, private authService: AuthService, private store: Store<AuthState>) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authRequest: HttpRequest<unknown> =
      this.localStorageService.getAccessCode() === '' ? request : this.addAccessTokenHeader(request, this.localStorageService.getAccessCode());
    return next.handle(authRequest).pipe(
      catchError((error: Response) => {
        if (error.status === 401 && this.localStorageService.getAccessCode() !== '' && this.count < 2) {
          this.count++;
          return this.refreshToken(request, next, this.localStorageService.getRefreshCode());
        }
        throw error;
      })
    );
  }

  addAccessTokenHeader(request: HttpRequest<unknown>, accessToken: string) {
    return request.clone({ headers: request.headers.set('Authorization', `Bearer ${accessToken}`) });
  }

  refreshToken(request: HttpRequest<unknown>, next: HttpHandler, refreshToken: string) {
    return this.authService.refreshToken(refreshToken).pipe(
      switchMap((response) => {
        this.localStorageService.saveTokens(response);
        return next.handle(this.addAccessTokenHeader(request, response.access_token));
      }),
      catchError((error) => {
        this.store.dispatch(logOut());
        console.log(error);
        throw error;
      })
    );
  }
}
