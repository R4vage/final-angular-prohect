import { createAction, props } from '@ngrx/store';
import { ArtAlbums } from '../reducers/artist-albums.reducer';

export const addArtistAlbums = createAction(
  '[ArtistAlbums/API] Load ArtistAlbums Success',
  props<{ artistId: string }>()
);

export const addArtistAlbumsSuccess = createAction(
  '[ArtistAlbums/API] Add ArtistAlbums',
  props<{ artistAlbums: ArtAlbums }>()
);

export const addArtistAlbumss = createAction(
  '[ArtistAlbums/API] Add ArtistAlbumss',
  props<{ artistAlbumss: ArtAlbums[] }>()
);
