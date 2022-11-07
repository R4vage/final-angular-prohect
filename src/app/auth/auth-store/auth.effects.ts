import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { loginSuccessful, logOut } from './auth.actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loginSuccessful),
        tap((action) => {
          localStorage.setItem('accessToken', action.access_token);
          localStorage.setItem('refreshToken', action.refresh_token);
          localStorage.setItem('login', JSON.stringify({ ...action }));
        })
      );
    },
    { dispatch: false }
  );

  logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(logOut),
        tap(() => {
          localStorage.clear();
        })
      );
    },
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
