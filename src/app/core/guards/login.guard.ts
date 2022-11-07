import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { isLoggedOut } from 'src/app/auth/auth-store/auth.selectors';
import { AuthState } from 'src/app/auth/auth-store/reducers';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  canActivate(): Observable<boolean | UrlTree> {
    return this.store.pipe(
      select(isLoggedOut),
      map((loggedOut) => {
        return this.checkLogout(loggedOut);
      })
    );
  }

  checkLogout(loggedOut: boolean) {
    if (!loggedOut) {
      return this.router.parseUrl('/');
    }
    return loggedOut;
  }

  constructor(private store: Store<AuthState>, private router: Router) {}
}
