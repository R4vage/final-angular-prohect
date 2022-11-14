import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPlaylists from '../reducers/playlists.reducer';
import { PlaylistState } from '../reducers/playlists.reducer';

export const selectPlaylistState = createFeatureSelector<PlaylistState>('playlists');

export const selectAllPlaylists = createSelector(selectPlaylistState, fromPlaylists.selectAll);

export const selectAllPlaylistsEntities = createSelector(selectPlaylistState, fromPlaylists.selectEntities);

export const arePlaylistsLoaded = createSelector(selectPlaylistState, (state) => {
  return state.allPlaylistsLoaded;
});

export function isPlaylistInStore(id: string) {
  return createSelector(selectAllPlaylists, (playlists) => !!playlists.find((playlist) => playlist.id === id && playlist.tracks.items));
}

export function selectPlaylistById(idPlaylist: string | number) {
  return createSelector(selectAllPlaylistsEntities, (state) => state[idPlaylist]);
}
