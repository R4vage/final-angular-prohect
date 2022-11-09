import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { PlaylistItem } from 'src/app/core/models/playlist.models';

export const loadPlaylists = createAction('[Playlists/API] Load Playlists');
export const allPlaylistsLoaded = createAction('[Playlists/API] Playlists Loaded', props<{ playlists: PlaylistItem[] }>());

export const addPlaylist = createAction('[Playlists/API] Add Playlist', props<{ playlist: PlaylistItem }>());

export const upsertPlaylist = createAction('[Playlists/API] Upsert Playlist', props<{ playlist: PlaylistItem }>());

export const addPlaylists = createAction('[Playlists/API] Add Playlists', props<{ playlists: PlaylistItem[] }>());

export const upsertPlaylists = createAction('[Playlists/API] Upsert Playlists', props<{ playlists: PlaylistItem[] }>());

export const updatePlaylist = createAction('[Playlists/API] Update Playlist', props<{ playlist: Update<PlaylistItem> }>());

export const updatePlaylists = createAction('[Playlists/API] Update Playlists', props<{ playlists: Update<PlaylistItem>[] }>());

export const deletePlaylist = createAction('[Playlists/API] Delete Playlist', props<{ id: string }>());

export const deletePlaylists = createAction('[Playlists/API] Delete Playlists', props<{ ids: string[] }>());

export const clearPlaylists = createAction('[Playlists/API] Clear Playlists');
