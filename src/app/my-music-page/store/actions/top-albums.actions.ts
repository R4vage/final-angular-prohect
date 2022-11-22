import { createAction, props } from '@ngrx/store';
import { AlbumItem } from 'src/app/core/models/album.models';

export const loadTopUserAlbums = createAction(
  '[TopUserAlbum/API] Load TopUserAlbums'
);

export const loadTopUserAlbumsSuccess = createAction(
  '[TopUserAlbum/API] Load TopUserAlbums Success',
  props<{ topUserAlbums: AlbumItem[]; totalItems: number }>()
);

export const loadTopUserAlbumsFailure = createAction(
  '[TopUserAlbum/API] Load TopUserAlbums Failure',
  props<{ error: any }>()
);

export const addTopUserAlbum = createAction(
  '[TopUserAlbum/API] Add TopUserAlbum',
  props<{ topUserAlbum: AlbumItem }>()
);

export const upsertTopUserAlbum = createAction(
  '[TopUserAlbum/API] Upsert TopUserAlbum',
  props<{ topUserAlbum: AlbumItem }>()
);

export const addTopUserAlbums = createAction(
  '[TopUserAlbum/API] Add TopUserAlbums',
  props<{ topUserAlbums: AlbumItem[] }>()
);

export const upsertTopUserAlbums = createAction(
  '[TopUserAlbum/API] Upsert TopUserAlbums',
  props<{ topUserAlbums: AlbumItem[] }>()
);

export const deleteTopUserAlbum = createAction(
  '[TopUserAlbum/API] Delete TopUserAlbum',
  props<{ id: string }>()
);
