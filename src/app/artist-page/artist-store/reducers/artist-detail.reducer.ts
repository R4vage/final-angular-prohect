import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as ArtistDetailActions from '../actions/artist-detail.actions';
import { ArtistDetails } from 'src/app/core/models/artist.models';

export interface ArtDetail {
  id: string;
  results: ArtistDetails;
}

export const artistDetailsFeatureKey = 'artistDetails';

export interface ArtistDetailsState extends EntityState<ArtDetail> {
  // additional entities state properties
}

export const adapter: EntityAdapter<ArtDetail> =
  createEntityAdapter<ArtDetail>();

export const initialState: ArtistDetailsState = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(ArtistDetailActions.addArtistDetailSuccess, (state, action) =>
    adapter.addOne(action.artistDetail, state)
  ),
  on(ArtistDetailActions.addArtistDetail, (state) => state),

  on(ArtistDetailActions.addArtistDetails, (state, action) =>
    adapter.addMany(action.artistDetails, state)
  )
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
