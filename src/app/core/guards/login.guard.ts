import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { isLoggedOut } from 'src/app/auth/auth-store/auth.selectors';
import { AuthState } from 'src/app/auth/auth-store/reducers';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.pipe(
      select(isLoggedOut),
      tap((loggedOut) => {
        if (!loggedOut) {
          this.router.navigateByUrl('/');
        }
      })
    );
  }

  constructor(private store: Store<AuthState>, private router: Router) {}
}
