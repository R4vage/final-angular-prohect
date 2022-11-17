import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { ArtDetail } from '../reducers/artist-detail.reducer';

export const loadArtistDetails = createAction(
  '[ArtistDetail/API] Load ArtistDetails',
  props<{ artistDetails: ArtDetail[] }>()
);

export const addArtistDetail = createAction(
  '[ArtistDetail/API] Add ArtistDetail',
  props<{ artistId: string }>()
);

export const addArtistDetailSuccess = createAction(
  '[ArtistDetail/API] Add ArtistDetail Success',
  props<{ artistDetail: ArtDetail }>()
);

export const upsertArtistDetail = createAction(
  '[ArtistDetail/API] Upsert ArtistDetail',
  props<{ artistDetail: ArtDetail }>()
);

export const addArtistDetails = createAction(
  '[ArtistDetail/API] Add ArtistDetails',
  props<{ artistDetails: ArtDetail[] }>()
);

export const upsertArtistDetails = createAction(
  '[ArtistDetail/API] Upsert ArtistDetails',
  props<{ artistDetails: ArtDetail[] }>()
);

export const updateArtistDetail = createAction(
  '[ArtistDetail/API] Update ArtistDetail',
  props<{ artistDetail: Update<ArtDetail> }>()
);

export const updateArtistDetails = createAction(
  '[ArtistDetail/API] Update ArtistDetails',
  props<{ artistDetails: Update<ArtDetail>[] }>()
);

export const deleteArtistDetail = createAction(
  '[ArtistDetail/API] Delete ArtistDetail',
  props<{ id: string }>()
);

export const deleteArtistDetails = createAction(
  '[ArtistDetail/API] Delete ArtistDetails',
  props<{ ids: string[] }>()
);

export const clearArtistDetails = createAction(
  '[ArtistDetail/API] Clear ArtistDetails'
);
