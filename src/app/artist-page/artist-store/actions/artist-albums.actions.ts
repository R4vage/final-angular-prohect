import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { ArtistAlbums } from '../../artist-albums.model';

export const loadArtistAlbumss = createAction(
  '[ArtistAlbums/API] Load ArtistAlbumss',
  props<{ artistAlbumss: ArtistAlbums[] }>()
);

export const addArtistAlbums = createAction(
  '[ArtistAlbums/API] Add ArtistAlbums',
  props<{ artistAlbums: ArtistAlbums }>()
);

export const upsertArtistAlbums = createAction(
  '[ArtistAlbums/API] Upsert ArtistAlbums',
  props<{ artistAlbums: ArtistAlbums }>()
);

export const addArtistAlbumss = createAction(
  '[ArtistAlbums/API] Add ArtistAlbumss',
  props<{ artistAlbumss: ArtistAlbums[] }>()
);

export const upsertArtistAlbumss = createAction(
  '[ArtistAlbums/API] Upsert ArtistAlbumss',
  props<{ artistAlbumss: ArtistAlbums[] }>()
);

export const updateArtistAlbums = createAction(
  '[ArtistAlbums/API] Update ArtistAlbums',
  props<{ artistAlbums: Update<ArtistAlbums> }>()
);

export const updateArtistAlbumss = createAction(
  '[ArtistAlbums/API] Update ArtistAlbumss',
  props<{ artistAlbumss: Update<ArtistAlbums>[] }>()
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
