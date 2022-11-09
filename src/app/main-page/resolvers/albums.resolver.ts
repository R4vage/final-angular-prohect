import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, finalize, first, Observable, of, retry, tap } from 'rxjs';
import { loadAlbums } from '../main-page-store/actions/albums.actions';
import { AlbumState } from '../main-page-store/reducers/albums.reducer';
import { areAlbumsLoaded } from '../main-page-store/selectors/album.selectors';

@Injectable({
  providedIn: 'root',
})
export class AlbumsResolver implements Resolve<boolean> {
  loading = false;
  constructor(private store: Store<AlbumState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.pipe(
      select(areAlbumsLoaded),
      tap({
        next: (albumsLoaded) => {
          if (!this.loading && !albumsLoaded) {
            this.loading = true;
            this.store.dispatch(loadAlbums());
          }
        },
      }),
      filter((productsLoaded) => {
        return !productsLoaded;
      }),
      first(),
      finalize(() => {
        this.loading = false;
      })
    );
  }
}
