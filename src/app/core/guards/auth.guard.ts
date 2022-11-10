import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { isLoggedIn } from 'src/app/auth/auth-store/auth.selectors';
import { AuthState } from 'src/app/auth/auth-store/reducers';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  canActivate(): Observable<boolean | UrlTree> {
    return this.store.pipe(
      select(isLoggedIn),
      map((loggedIn) => {
        return this.checkLogin(loggedIn);
      })
    );
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate();
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> {
    return this.store.pipe(
      select(isLoggedIn),
      map((loggedIn) => {
        if (!loggedIn) {
          this.router.navigate(['/login']);
        }

        return loggedIn;
      })
    );
  }

  checkLogin(loggedIn: boolean): boolean | UrlTree {
    if (!loggedIn) {
      return this.router.parseUrl('/login');
    }
    return loggedIn;
  }

  constructor(private store: Store<AuthState>, private router: Router) {}
}
