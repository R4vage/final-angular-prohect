import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { AlbumItem, Albums } from 'src/app/core/models/album.models';

export const loadAlbums = createAction('[Albums/API] Load Albums');
export const loadAlbum = createAction('[Resolver] Load Album', props<{ id: string }>());

export const allAlbumsLoaded = createAction('[Albums/API] Albums Loaded', props<{ albums: AlbumItem[] }>());

export const addAlbum = createAction('[Albums/API] Add Album', props<{ album: AlbumItem }>());

export const upsertAlbum = createAction('[Albums/API] Upsert Album', props<{ album: AlbumItem }>());

export const addAlbums = createAction('[Albums/API] Add Albums', props<{ albums: AlbumItem[] }>());

export const upsertAlbums = createAction('[Albums/API] Upsert Albums', props<{ albums: AlbumItem[] }>());

export const updateAlbum = createAction('[Albums/API] Update Album', props<{ album: Update<AlbumItem> }>());

export const updateAlbums = createAction('[Albums/API] Update Albums', props<{ albums: Update<AlbumItem>[] }>());

export const deleteAlbum = createAction('[Albums/API] Delete Album', props<{ id: string }>());

export const deleteAlbums = createAction('[Albums/API] Delete Albums', props<{ ids: string[] }>());

export const clearAlbums = createAction('[Albums/API] Clear Albums');
