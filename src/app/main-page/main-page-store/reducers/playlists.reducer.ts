import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { PlaylistItem } from 'src/app/core/models/playlist.models';
import * as PlaylistsActions from '../actions/playlists.actions';

export const playlistsesFeatureKey = 'playlists';

export interface PlaylistState extends EntityState<PlaylistItem> {
  allPlaylistsLoaded: boolean;
}

export const adapter: EntityAdapter<PlaylistItem> = createEntityAdapter<PlaylistItem>();

export const playlistInitialState: PlaylistState = adapter.getInitialState({
  allPlaylistsLoaded: false,
});

export const reducer = createReducer(
  playlistInitialState,
  on(PlaylistsActions.allPlaylistsLoaded, (state, action) => adapter.upsertMany(action.playlists, { ...state, allPlaylistsLoaded: true })),
  on(PlaylistsActions.addPlaylist, (state, action) => adapter.addOne(action.playlist, state)),
  on(PlaylistsActions.upsertPlaylist, (state, action) => adapter.upsertOne(action.playlist, state)),
  on(PlaylistsActions.addPlaylists, (state, action) => adapter.addMany(action.playlists, state)),
  on(PlaylistsActions.upsertPlaylists, (state, action) => adapter.upsertMany(action.playlists, state)),
  on(PlaylistsActions.updatePlaylist, (state, action) => adapter.updateOne(action.playlist, state)),
  on(PlaylistsActions.updatePlaylists, (state, action) => adapter.updateMany(action.playlists, state)),
  on(PlaylistsActions.deletePlaylist, (state, action) => adapter.removeOne(action.id, state)),
  on(PlaylistsActions.deletePlaylists, (state, action) => adapter.removeMany(action.ids, state)),
  on(PlaylistsActions.clearPlaylists, (state) => adapter.removeAll(state))
);

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
