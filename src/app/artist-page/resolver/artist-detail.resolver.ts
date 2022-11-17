import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, finalize, first, Observable, tap } from 'rxjs';
import { addArtistDetail } from '../artist-store/actions/artist-detail.actions';
import { ArtistDetailsState } from '../artist-store/reducers/artist-detail.reducer';
import { artistDetailsHasBeenDone } from '../artist-store/selectors/artist-detail.selectors';

@Injectable({
  providedIn: 'root',
})
export class ArtistDetailsResolver implements Resolve<boolean> {
  loading = false;
  constructor(private store: Store<ArtistDetailsState>) {}
  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.store.pipe(
      select(artistDetailsHasBeenDone(route.params['id'])),
      tap({
        next: (hasDetailsSearchBeenDone) => {
          if (!this.loading && !hasDetailsSearchBeenDone) {
            this.loading = true;

            return this.store.dispatch(
              addArtistDetail({ artistId: route.params['id'] })
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
