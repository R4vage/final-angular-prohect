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
import { artistAlbumsHasBeenDone } from '../artist-store/selectors/artist-albums.selectors';

@Injectable({
  providedIn: 'root',
})
export class ArtistAlbumsResolver implements Resolve<boolean> {
  loading = false;
  constructor(private store: Store<ArtistAlbumsState>) {}
  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.store.pipe(
      select(artistAlbumsHasBeenDone(route.params['id'])),
      tap({
        next: (hasAlbumsSearchBeenDone) => {
          if (!this.loading && !hasAlbumsSearchBeenDone) {
            this.loading = true;
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
