import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { ArtRelatedArtists } from '../reducers/artist-related-artist.reducer';

export const loadArtistRelatedArtists = createAction(
  '[ArtistRelatedArtist/API] Load ArtistRelatedArtists',
  props<{ artistRelatedArtists: ArtRelatedArtists[] }>()
);

export const addArtistRelatedArtist = createAction(
  '[ArtistRelatedArtist/API] Add ArtistRelatedArtist',
  props<{ artistId: string }>()
);

export const addArtistRelatedArtistSuccess = createAction(
  '[ArtistRelatedArtist/API] Add ArtistRelatedArtist Success',
  props<{ artistRelatedArtist: ArtRelatedArtists }>()
);

export const upsertArtistRelatedArtist = createAction(
  '[ArtistRelatedArtist/API] Upsert ArtistRelatedArtist',
  props<{ artistRelatedArtist: ArtRelatedArtists }>()
);

export const addArtistRelatedArtists = createAction(
  '[ArtistRelatedArtist/API] Add ArtistRelatedArtists',
  props<{ artistRelatedArtists: ArtRelatedArtists[] }>()
);

export const upsertArtistRelatedArtists = createAction(
  '[ArtistRelatedArtist/API] Upsert ArtistRelatedArtists',
  props<{ artistRelatedArtists: ArtRelatedArtists[] }>()
);

export const updateArtistRelatedArtist = createAction(
  '[ArtistRelatedArtist/API] Update ArtistRelatedArtist',
  props<{ artistRelatedArtist: Update<ArtRelatedArtists> }>()
);

export const updateArtistRelatedArtists = createAction(
  '[ArtistRelatedArtist/API] Update ArtistRelatedArtists',
  props<{ artistRelatedArtists: Update<ArtRelatedArtists>[] }>()
);

export const deleteArtistRelatedArtist = createAction(
  '[ArtistRelatedArtist/API] Delete ArtistRelatedArtist',
  props<{ id: string }>()
);

export const deleteArtistRelatedArtists = createAction(
  '[ArtistRelatedArtist/API] Delete ArtistRelatedArtists',
  props<{ ids: string[] }>()
);

export const clearArtistRelatedArtists = createAction(
  '[ArtistRelatedArtist/API] Clear ArtistRelatedArtists'
);
