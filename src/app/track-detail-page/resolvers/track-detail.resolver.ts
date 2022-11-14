import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, finalize, first, Observable, tap } from 'rxjs';
import { loadTrack } from '../track-detail-store/actions/tracks.actions';
import { TrackState } from '../track-detail-store/reducers/tracks.reducer';
import { isTrackInStore } from '../track-detail-store/selectors/track.selectors';

@Injectable({
  providedIn: 'root',
})
export class TrackDetailResolver implements Resolve<boolean> {
  loading = false;
  constructor(private store: Store<TrackState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.pipe(
      select(isTrackInStore(route.params['id'])),
      tap({
        next: (isTrackInStore) => {
          if (!this.loading && !isTrackInStore) {
            this.loading = true;
            this.store.dispatch(loadTrack({ id: route.params['id'] }));
          }
        },
      }),
      filter(() => {
        return true;
      }),
      filter((isTrackInStore) => isTrackInStore),

      first(),

      finalize(() => {
        this.loading = false;
      })
    );
  }
}
