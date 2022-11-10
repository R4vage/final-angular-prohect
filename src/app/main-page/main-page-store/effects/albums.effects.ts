import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, retry } from 'rxjs';
import { AlbumService } from '../../services/album.service';
import { allAlbumsLoaded, loadAlbums } from '../actions/albums.actions';

@Injectable()
export class AlbumsEffects {
  loadAlbums$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadAlbums),
      concatMap(() => {
        return this.albumsService.getAlbumReleases();
      }),
      map((albums) => {
        return allAlbumsLoaded({ albums: albums.items });
      })
    );
  });

  constructor(private actions$: Actions, private albumsService: AlbumService) {}
}
