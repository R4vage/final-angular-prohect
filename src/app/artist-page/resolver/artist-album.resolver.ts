import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, finalize, first, Observable, tap } from 'rxjs';
import { addArtistAlbums } from '../artist-store/actions/artist-albums.actions';
import { ArtistAlbumsState } from '../artist-store/reducers/artist-albums.reducer';
import { selectAreArtistAlbumsLoaded } from '../artist-store/selectors/artist-albums.selectors';

@Injectable({
  providedIn: 'root',
})
export class SearchResolver implements Resolve<boolean> {
  loading = false;
  constructor(private store: Store<ArtistAlbumsState>) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.pipe(
      select(selectAreArtistAlbumsLoaded),
      tap({
        next: (artistAlbumsLoaded) => {
          if (!this.loading && !artistAlbumsLoaded) {
            this.loading = true;
            console.log(route.params['id']);
            return this.store.dispatch(
              addArtistAlbums({ artistId: route.params['id'] })
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
