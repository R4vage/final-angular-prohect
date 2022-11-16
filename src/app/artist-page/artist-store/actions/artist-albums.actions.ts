import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { ArtAlbums } from '../reducers/artist-albums.reducer';

export const loadArtistAlbumss = createAction(
  '[ArtistAlbums/API] Load ArtistAlbumss',
  props<{ artistAlbumss: ArtAlbums[] }>()
);

export const addArtistAlbums = createAction(
  '[ArtistAlbums/API] Load ArtistAlbums Success',
  props<{ artistId: string }>()
);

export const addArtistAlbumsSuccess = createAction(
  '[ArtistAlbums/API] Add ArtistAlbums',
  props<{ artistAlbums: ArtAlbums }>()
);

export const upsertArtistAlbums = createAction(
  '[ArtistAlbums/API] Upsert ArtistAlbums',
  props<{ artistAlbums: ArtAlbums }>()
);

export const addArtistAlbumss = createAction(
  '[ArtistAlbums/API] Add ArtistAlbumss',
  props<{ artistAlbumss: ArtAlbums[] }>()
);

export const upsertArtistAlbumss = createAction(
  '[ArtistAlbums/API] Upsert ArtistAlbumss',
  props<{ artistAlbumss: ArtAlbums[] }>()
);

export const updateArtistAlbums = createAction(
  '[ArtistAlbums/API] Update ArtistAlbums',
  props<{ artistAlbums: Update<ArtAlbums> }>()
);

export const updateArtistAlbumss = createAction(
  '[ArtistAlbums/API] Update ArtistAlbumss',
  props<{ artistAlbumss: Update<ArtAlbums>[] }>()
);

export const deleteArtistAlbums = createAction(
  '[ArtistAlbums/API] Delete ArtistAlbums',
  props<{ id: string }>()
);

export const deleteArtistAlbumss = createAction(
  '[ArtistAlbums/API] Delete ArtistAlbumss',
  props<{ ids: string[] }>()
);

export const clearArtistAlbumss = createAction(
  '[ArtistAlbums/API] Clear ArtistAlbumss'
);
