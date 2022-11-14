import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, finalize, first, Observable, of, tap } from 'rxjs';
import { loadPlaylist } from 'src/app/main-page/main-page-store/actions/playlists.actions';
import { PlaylistState } from 'src/app/main-page/main-page-store/reducers/playlists.reducer';
import { isPlaylistInStore } from 'src/app/main-page/main-page-store/selectors/playlist.selectors';

@Injectable({
  providedIn: 'root',
})
export class PlaylistDetailResolver implements Resolve<boolean> {
  loading = false;
  constructor(private store: Store<PlaylistState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.pipe(
      select(isPlaylistInStore(route.params['id'])),
      tap({
        next: (isPlaylistInStore) => {
          if (!this.loading && !isPlaylistInStore) {
            this.loading = true;
            this.store.dispatch(loadPlaylist({ id: route.params['id'] }));
          }
        },
      }),

      filter((isPlaylistInStore) => isPlaylistInStore),

      first(),

      finalize(() => {
        this.loading = false;
      })
    );
  }
}
