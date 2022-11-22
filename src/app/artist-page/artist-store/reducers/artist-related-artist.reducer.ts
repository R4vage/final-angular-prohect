import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as ArtistRelatedArtistActions from '../actions/artist-related-artist.actions';
import { ArtistRelatedArtists } from 'src/app/core/models/artist.models';

export interface ArtRelatedArtists {
  id: string;
  results: ArtistRelatedArtists;
}

export const artistRelatedArtistsFeatureKey = 'artistRelatedArtists';

export interface ArtistRelatedArtistsState
  extends EntityState<ArtRelatedArtists> {
  // additional entities state properties
}

export const adapter: EntityAdapter<ArtRelatedArtists> =
  createEntityAdapter<ArtRelatedArtists>();

export const initialState: ArtistRelatedArtistsState = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(ArtistRelatedArtistActions.addArtistRelatedArtist, (state) => state),
  on(
    ArtistRelatedArtistActions.addArtistRelatedArtistSuccess,
    (state, action) => adapter.addOne(action.artistRelatedArtist, state)
  ),

  on(ArtistRelatedArtistActions.addArtistRelatedArtists, (state, action) =>
    adapter.addMany(action.artistRelatedArtists, state)
  )
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
