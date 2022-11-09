import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, retry } from 'rxjs';
import { PlaylistService } from '../../services/playlist.service';
import { allPlaylistsLoaded, loadPlaylists } from '../actions/playlists.actions';

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

  constructor(private actions$: Actions, private playlistService: PlaylistService) {}
}
