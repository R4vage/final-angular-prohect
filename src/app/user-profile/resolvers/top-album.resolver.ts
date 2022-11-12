import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, finalize, first, Observable, of, retry, tap } from 'rxjs';
import { loadTopUserAlbums } from '../user-profile-store/actions/top-albums.actions';
import { TopUserAlbumsState} from '../user-profile-store/reducers/top-albums.reducer';
import { selectAreTopAlbumsLoaded } from '../user-profile-store/selectors/top-albums.selectors';

@Injectable({
  providedIn: 'root',
})
export class TopUserAlbumsResolver implements Resolve<boolean> {
  loading = false;
  constructor(private store: Store<TopUserAlbumsState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.pipe(
      select(selectAreTopAlbumsLoaded),
      tap({
        next: (albumsLoaded) => {
          if (!this.loading && !albumsLoaded) {
            this.loading = true;
            this.store.dispatch(loadTopUserAlbums());
          }
        },
      }),
      filter((albumsLoaded) => {
        return albumsLoaded;
      }),
      first(),
      finalize(() => {
        this.loading = false;
      })
    );
  }
}
