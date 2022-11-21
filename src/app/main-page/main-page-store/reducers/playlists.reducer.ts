import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { PlaylistItem } from 'src/app/core/models/playlist.models';
import * as PlaylistsActions from '../actions/playlists.actions';

export const playlistsesFeatureKey = 'playlists';

export interface PlaylistState extends EntityState<PlaylistItem> {
  allPlaylistsLoaded: boolean;
}

export const adapter: EntityAdapter<PlaylistItem> =
  createEntityAdapter<PlaylistItem>();

export const playlistInitialState: PlaylistState = adapter.getInitialState({
  allPlaylistsLoaded: false,
});

export const reducer = createReducer(
  playlistInitialState,
  on(PlaylistsActions.allPlaylistsLoaded, (state, action) =>
    adapter.upsertMany(action.playlists, { ...state, allPlaylistsLoaded: true })
  ),
  on(PlaylistsActions.addPlaylist, (state, action) =>
    adapter.addOne(action.playlist, state)
  ),
  on(PlaylistsActions.upsertPlaylist, (state, action) =>
    adapter.upsertOne(action.playlist, state)
  )
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
