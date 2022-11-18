import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, finalize, first, Observable, of, retry, tap } from 'rxjs';
import { loadSavedTracks } from '../store/actions/saved-tracks.actions';
import { SavedTrackState } from '../store/reducers/saved-tracks.reducer';
import { selectAreSavedTracksLoaded } from '../store/selectors/saved-tracks.selectors';

@Injectable({
  providedIn: 'root',
})
export class SavedTracksResolver implements Resolve<boolean> {
  loading = false;
  constructor(private store: Store<SavedTrackState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.pipe(
      select(selectAreSavedTracksLoaded),
      tap({
        next: (tracksLoaded) => {
          if (!this.loading && !tracksLoaded) {
            this.loading = true;
            this.store.dispatch(loadSavedTracks());
          }
        },
      }),
      filter((tracksLoaded) => {
        return tracksLoaded;
      }),
      first(),
      finalize(() => {
        this.loading = false;
      })
    );
  }
}
