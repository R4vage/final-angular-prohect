import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, finalize, first, Observable, tap } from 'rxjs';
import { loadAlbum } from 'src/app/main-page/main-page-store/actions/albums.actions';
import { AlbumState } from 'src/app/main-page/main-page-store/reducers/albums.reducer';
import { isAlbumInStore } from 'src/app/main-page/main-page-store/selectors/album.selectors';
import { checkSavedItems } from 'src/app/saved-store/saved-item.actions';

@Injectable({
  providedIn: 'root',
})
export class AlbumDetailResolver implements Resolve<boolean> {
  loading = false;
  constructor(private store: Store) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.pipe(
      select(isAlbumInStore(route.params['id'])),
      tap({
        next: (isAlbumInStore) => {
          if (!this.loading && !isAlbumInStore) {
            this.loading = true;
            this.store.dispatch(
              checkSavedItems({ ids: [route.params['id']], kind: 'album' })
            );
            this.store.dispatch(loadAlbum({ id: route.params['id'] }));
          }
        },
      }),
      filter((isAlbumInStore) => isAlbumInStore),

      first(),

      finalize(() => {
        this.loading = false;
      })
    );
  }
}
