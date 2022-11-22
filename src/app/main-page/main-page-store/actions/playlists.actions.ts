import { createAction, props } from '@ngrx/store';
import { PlaylistItem } from 'src/app/core/models/playlist.models';

export const loadPlaylists = createAction('[Playlists/API] Load Playlists');
export const loadPlaylist = createAction(
  '[Resolver] Load Playlist',
  props<{ id: string }>()
);

export const allPlaylistsLoaded = createAction(
  '[Playlists/API] Playlists Loaded',
  props<{ playlists: PlaylistItem[] }>()
);

export const addPlaylist = createAction(
  '[Playlists/API] Add Playlist',
  props<{ playlist: PlaylistItem }>()
);

export const upsertPlaylist = createAction(
  '[Playlists/API] Upsert Playlist',
  props<{ playlist: PlaylistItem }>()
);
