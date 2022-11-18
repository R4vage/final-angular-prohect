import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, finalize, first, Observable, tap } from 'rxjs';
import { addArtistTopTrack } from '../artist-store/actions/artist-top-track.actions';
import { ArtistTopTracksState } from '../artist-store/reducers/artist-top-track.reducer';
import { artistTopTracksHasBeenDone } from '../artist-store/selectors/artist-top-tracks.selectors';

@Injectable({
  providedIn: 'root',
})
export class ArtistTopTracksResolver implements Resolve<boolean> {
  loading = false;
  constructor(private store: Store<ArtistTopTracksState>) {}
  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.store.pipe(
      select(artistTopTracksHasBeenDone(route.params['id'])),
      tap({
        next: (hasTopTracksSearchBeenDone) => {
          if (!this.loading && !hasTopTracksSearchBeenDone) {
            this.loading = true;
            return this.store.dispatch(
              addArtistTopTrack({ artistId: route.params['id'] })
            );
          }
        },
      }),
      filter(() => {
        return true;
      }),
      first(),

      finalize(() => {
        this.loading = false;
      })
    );
  }
}
