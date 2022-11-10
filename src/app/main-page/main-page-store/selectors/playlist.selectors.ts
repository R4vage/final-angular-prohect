import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPlaylists from '../reducers/playlists.reducer';
import { PlaylistState } from '../reducers/playlists.reducer';

export const selectPlaylistState = createFeatureSelector<PlaylistState>('playlists');

export const selectAllPlaylists = createSelector(selectPlaylistState, fromPlaylists.selectAll);

export const arePlaylistsLoaded = createSelector(selectPlaylistState, (state) => {
  return state.allPlaylistsLoaded;
});
