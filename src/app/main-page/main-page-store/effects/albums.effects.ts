import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, concatMap, map } from 'rxjs';
import { checkSavedItems } from 'src/app/saved-store/saved-item.actions';
import { prepareIdArray } from 'src/app/saved-store/saved-item.helpers';
import { SavedItem } from 'src/app/saved-store/saved-item.reducer';
import { AlbumService } from '../../services/album.service';
import { allAlbumsLoaded, loadAlbum, loadAlbums, upsertAlbum } from '../actions/albums.actions';

@Injectable()
export class AlbumsEffects {
  loadAlbums$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadAlbums),
      concatMap(() => {
        return this.albumsService.getAlbumReleases();
      }),
      map((albums) => {
        let albumIds = prepareIdArray(albums.items);
        this.store.dispatch(
          checkSavedItems({ ids: albumIds, kind: 'album' })
        );
        return allAlbumsLoaded({ albums: albums.items });
      })
    );
  });

  addAlbum$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadAlbum),
      concatMap((action) => {
        return this.albumsService.getAlbum(action.id);
      }),
      catchError((err) => {
        this.router.navigateByUrl('/home');
        throw err;
      }),
      map((album) => {
        let trackIds = prepareIdArray(album.tracks.items);
        this.store.dispatch(checkSavedItems({ ids: trackIds, kind: 'track' }))
        this.store.dispatch(
          checkSavedItems({ ids: [album.id], kind: 'album' })
        );
        return upsertAlbum({ album });
      })
    );
  });

  constructor(private actions$: Actions, private albumsService: AlbumService, private router: Router, private store: Store<SavedItem>) {}
}
