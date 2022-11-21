import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { AlbumItem } from 'src/app/core/models/album.models';

export const loadAlbums = createAction('[Albums/API] Load Albums');
export const loadAlbum = createAction('[Resolver] Load Album', props<{ id: string }>());

export const allAlbumsLoaded = createAction('[Albums/API] Albums Loaded', props<{ albums: AlbumItem[] }>());

export const addAlbum = createAction('[Albums/API] Add Album', props<{ album: AlbumItem }>());

export const upsertAlbum = createAction('[Albums/API] Upsert Album', props<{ album: AlbumItem }>());

export const addAlbums = createAction('[Albums/API] Add Albums', props<{ albums: AlbumItem[] }>());

export const deleteAlbum = createAction('[Albums/API] Delete Album', props<{ id: string }>());

