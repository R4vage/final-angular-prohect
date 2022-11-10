import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { AlbumItem, Albums } from 'src/app/core/models/album.models';

export const loadAlbums = createAction('[Albums/API] Load Albums');
export const allAlbumsLoaded = createAction('[Albums/API] Albums Loaded', props<{ albums: AlbumItem[] }>());

export const addAlbum = createAction('[Albums/API] Add Album', props<{ albums: AlbumItem }>());

export const upsertAlbum = createAction('[Albums/API] Upsert Album', props<{ albums: AlbumItem }>());

export const addAlbums = createAction('[Albums/API] Add Albums', props<{ albumss: AlbumItem[] }>());

export const upsertAlbums = createAction('[Albums/API] Upsert Albums', props<{ albumss: AlbumItem[] }>());

export const updateAlbum = createAction('[Albums/API] Update Album', props<{ albums: Update<AlbumItem> }>());

export const updateAlbums = createAction('[Albums/API] Update Albums', props<{ albumss: Update<AlbumItem>[] }>());

export const deleteAlbum = createAction('[Albums/API] Delete Album', props<{ id: string }>());

export const deleteAlbums = createAction('[Albums/API] Delete Albums', props<{ ids: string[] }>());

export const clearAlbums = createAction('[Albums/API] Clear Albums');
