import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, retry } from 'rxjs';
import { PlaylistService } from '../../services/playlist.service';
import { allPlaylistsLoaded, loadPlaylist, loadPlaylists, upsertPlaylist } from '../actions/playlists.actions';

@Injectable()
export class PlaylistsEffects {
  loadPlaylist$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPlaylists),

      concatMap(() => {
        return this.playlistService.getFeaturedPlaylists();
      }),
      map((playlist) => {
        return allPlaylistsLoaded({ playlists: playlist.items });
      })
    );
  });

  addPlaylist$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPlaylist),
      concatMap((action) => {
        return this.playlistService.getPlaylist(action.id);
      }),
      catchError((err) => {
        this.router.navigateByUrl('/home');
        throw err;
      }),
      map((playlist) => {
        return upsertPlaylist({ playlist });
      })
    );
  });

  constructor(private actions$: Actions, private playlistService: PlaylistService, private router: Router) {}
}
