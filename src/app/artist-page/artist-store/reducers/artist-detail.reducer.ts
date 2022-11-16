import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as ArtistDetailActions from '../actions/artist-detail.actions';
import { ArtistDetails } from 'src/app/core/models/artist.models';

export interface ArtDetail {
  id: string;
  results: ArtistDetails;
}

export const artistDetailsFeatureKey = 'artistDetails';

export interface State extends EntityState<ArtDetail> {
  // additional entities state properties
}

export const adapter: EntityAdapter<ArtDetail> =
  createEntityAdapter<ArtDetail>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(ArtistDetailActions.addArtistDetail, (state, action) =>
    adapter.addOne(action.artistDetail, state)
  ),
  on(ArtistDetailActions.upsertArtistDetail, (state, action) =>
    adapter.upsertOne(action.artistDetail, state)
  ),
  on(ArtistDetailActions.addArtistDetails, (state, action) =>
    adapter.addMany(action.artistDetails, state)
  ),
  on(ArtistDetailActions.upsertArtistDetails, (state, action) =>
    adapter.upsertMany(action.artistDetails, state)
  ),
  on(ArtistDetailActions.updateArtistDetail, (state, action) =>
    adapter.updateOne(action.artistDetail, state)
  ),
  on(ArtistDetailActions.updateArtistDetails, (state, action) =>
    adapter.updateMany(action.artistDetails, state)
  ),
  on(ArtistDetailActions.deleteArtistDetail, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(ArtistDetailActions.deleteArtistDetails, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),
  on(ArtistDetailActions.loadArtistDetails, (state, action) =>
    adapter.setAll(action.artistDetails, state)
  ),
  on(ArtistDetailActions.clearArtistDetails, (state) =>
    adapter.removeAll(state)
  )
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
