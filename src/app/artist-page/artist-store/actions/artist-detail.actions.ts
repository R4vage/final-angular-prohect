import { createAction, props } from '@ngrx/store';
import { ArtDetail } from '../reducers/artist-detail.reducer';

export const addArtistDetail = createAction(
  '[ArtistDetail/API] Add ArtistDetail',
  props<{ artistId: string }>()
);

export const addArtistDetailSuccess = createAction(
  '[ArtistDetail/API] Add ArtistDetail Success',
  props<{ artistDetail: ArtDetail }>()
);

export const addArtistDetails = createAction(
  '[ArtistDetail/API] Add ArtistDetails',
  props<{ artistDetails: ArtDetail[] }>()
);
