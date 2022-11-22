import { createAction, props } from '@ngrx/store';
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
