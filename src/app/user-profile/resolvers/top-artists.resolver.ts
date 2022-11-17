import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, finalize, first, Observable, tap } from 'rxjs';
import { loadTopUserArtists } from '../user-profile-store/actions/top-artists.actions';
import { TopUserArtistState } from '../user-profile-store/reducers/top-artists.reducer';
import { selectAreTopArtistsLoaded} from '../user-profile-store/selectors/top-artists.selectors';

@Injectable({
  providedIn: 'root',
})
export class TopArtistsResolver implements Resolve<boolean> {
  loading = false;
  constructor(private store: Store<TopUserArtistState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.pipe(
      select(selectAreTopArtistsLoaded),
      tap({
        next: (artistsLoaded) => {
          if (!this.loading && !artistsLoaded) {
            this.loading = true;
            this.store.dispatch(loadTopUserArtists());
          }
        },
      }),
      filter((artistsLoaded) => {
        return artistsLoaded;
      }),
      first(),
      finalize(() => {
        this.loading = false;
      })
    );
  }
}
