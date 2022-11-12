import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, retry } from 'rxjs';
import { AlbumService } from '../../services/album.service';
import { addAlbum, allAlbumsLoaded, loadAlbum, loadAlbums } from '../actions/albums.actions';

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
        console.log(album);
        return addAlbum({ album });
      })
    );
  });

  constructor(private actions$: Actions, private albumsService: AlbumService, private router: Router) {}
}
