import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Artist } from 'src/app/core/models/album.models';

export const loadTopUserArtists = createAction(
  '[TopUserArtist/API] Load TopUserArtists'
);

export const loadTopUserArtistsSuccess = createAction(
  '[TopUserArtist/API] Load TopUserArtists Success',
  props<{ topUserArtists: Artist[] }>()
);

export const loadTopUserArtistFailure = createAction(
  '[TopUserAlbum/API] Load TopUserAlbums Failure', 
  props<{ error: any }>()
);

export const addTopUserArtist = createAction(
  '[TopUserArtist/API] Add TopUserArtist',
  props<{ topUserArtist: Artist }>()
);

export const upsertTopUserArtist = createAction(
  '[TopUserArtist/API] Upsert TopUserArtist',
  props<{ topUserArtist: Artist }>()
);

export const addTopUserArtists = createAction(
  '[TopUserArtist/API] Add TopUserArtists',
  props<{ topUserArtists: Artist[] }>()
);

export const upsertTopUserArtists = createAction(
  '[TopUserArtist/API] Upsert TopUserArtists',
  props<{ topUserArtists: Artist[] }>()
);

export const updateTopUserArtist = createAction(
  '[TopUserArtist/API] Update TopUserArtist',
  props<{ topUserArtist: Update<Artist> }>()
);

export const updateTopUserArtists = createAction(
  '[TopUserArtist/API] Update TopUserArtists',
  props<{ topUserArtists: Update<Artist>[] }>()
);

export const deleteTopUserArtist = createAction(
  '[TopUserArtist/API] Delete TopUserArtist',
  props<{ id: string }>()
);

export const deleteTopUserArtists = createAction(
  '[TopUserArtist/API] Delete TopUserArtists',
  props<{ ids: string[] }>()
);

export const clearTopUserArtists = createAction(
  '[TopUserArtist/API] Clear TopUserArtists'
);
