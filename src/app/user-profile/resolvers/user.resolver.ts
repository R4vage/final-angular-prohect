import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, finalize, first, Observable, of, retry, tap } from 'rxjs';
import { User } from 'src/app/core/models/user-profile.models';
import { loadUser } from '../user-profile-store/actions/user.actions';
import { selectIsUserLoaded } from '../user-profile-store/selectors/user.selectors';

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<boolean> {
  loading = false;
  constructor(private store: Store<User>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.pipe(
      select(selectIsUserLoaded),
      tap({
        next: (userLoaded) => {
          if (!this.loading && !userLoaded) {
            this.loading = true;
            this.store.dispatch(loadUser());
          }
        },
      }),
      filter((userLoaded) => {
        return userLoaded;
      }),
      first(),
      finalize(() => {
        this.loading = false;
      })
    );
  }
}
