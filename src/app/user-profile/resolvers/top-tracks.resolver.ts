import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, finalize, first, Observable, tap } from 'rxjs';
import { loadTopUserTracks } from '../user-profile-store/actions/top-track.actions';
import { TopUserTracksState } from '../user-profile-store/reducers/top-track.reducer';
import { selectAreTopTracksLoaded } from '../user-profile-store/selectors/top-tracks.selectors';


@Injectable({
  providedIn: 'root',
})
export class TopUserTracksResolver implements Resolve<boolean> {
  loading = false;
  constructor(private store: Store<TopUserTracksState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.pipe(
      select(selectAreTopTracksLoaded),
      tap({
        next: (artistsLoaded) => {
          if (!this.loading && !artistsLoaded) {
            this.loading = true;
            this.store.dispatch(loadTopUserTracks());
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
