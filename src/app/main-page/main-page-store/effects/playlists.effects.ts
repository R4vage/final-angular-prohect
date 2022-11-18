import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, concatMap, map } from 'rxjs';
import { checkSavedItems } from 'src/app/saved-store/saved-item.actions';
import { prepareIdArray, prepareIdArrayFromItems } from 'src/app/saved-store/saved-item.helpers';
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
        let trackIds = prepareIdArrayFromItems(playlist.tracks.items.slice(0,20));
        this.store.dispatch(checkSavedItems({ ids: trackIds, kind: 'track' }))
        this.store.dispatch(
          checkSavedItems({ ids: [playlist.id], kind: 'playlist' })
        );
        return upsertPlaylist({ playlist });
      })
    );
  });

  constructor(private actions$: Actions, private playlistService: PlaylistService, private router: Router, private store: Store) {}
}
