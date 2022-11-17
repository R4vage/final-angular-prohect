import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, finalize, first, Observable, tap } from 'rxjs';
import { addArtistRelatedArtist } from '../artist-store/actions/artist-related-artist.actions';
import { ArtistRelatedArtistsState } from '../artist-store/reducers/artist-related-artist.reducer';
import { artistRelatedArtistsHasBeenDone } from '../artist-store/selectors/artist-related-artist.selectors';

@Injectable({
  providedIn: 'root',
})
export class ArtistRelatedArtistsResolver implements Resolve<boolean> {
  loading = false;
  constructor(private store: Store<ArtistRelatedArtistsState>) {}
  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.store.pipe(
      select(artistRelatedArtistsHasBeenDone(route.params['id'])),
      tap({
        next: (hasAlbumsSearchBeenDone) => {
          if (!this.loading && !hasAlbumsSearchBeenDone) {
            this.loading = true;
            return this.store.dispatch(
              addArtistRelatedArtist({ artistId: route.params['id'] })
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
