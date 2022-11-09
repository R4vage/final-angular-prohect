import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, finalize, first, Observable, of, retry, tap } from 'rxjs';
import { loadPlaylists } from '../main-page-store/actions/playlists.actions';
import { PlaylistState } from '../main-page-store/reducers/playlists.reducer';
import { arePlaylistsLoaded } from '../main-page-store/selectors/playlist.selectors';

@Injectable({
  providedIn: 'root',
})
export class PlaylistsResolver implements Resolve<boolean> {
  loading = false;
  constructor(private store: Store<PlaylistState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.pipe(
      select(arePlaylistsLoaded),
      tap({
        next: (playlistsLoaded) => {
          if (!this.loading && !playlistsLoaded) {
            this.loading = true;
            this.store.dispatch(loadPlaylists());
          }
        },
      }),
      filter((playlistLoaded) => {
        return !playlistLoaded;
      }),
      first(),
      finalize(() => {
        this.loading = false;
      })
    );
  }
}
