import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as ArtistRelatedArtistActions from '../actions/artist-related-artist.actions';
import { Artist } from 'src/app/core/models/album.models';
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
  on(ArtistRelatedArtistActions.upsertArtistRelatedArtist, (state, action) =>
    adapter.upsertOne(action.artistRelatedArtist, state)
  ),
  on(ArtistRelatedArtistActions.addArtistRelatedArtists, (state, action) =>
    adapter.addMany(action.artistRelatedArtists, state)
  ),
  on(ArtistRelatedArtistActions.upsertArtistRelatedArtists, (state, action) =>
    adapter.upsertMany(action.artistRelatedArtists, state)
  ),
  on(ArtistRelatedArtistActions.updateArtistRelatedArtist, (state, action) =>
    adapter.updateOne(action.artistRelatedArtist, state)
  ),
  on(ArtistRelatedArtistActions.updateArtistRelatedArtists, (state, action) =>
    adapter.updateMany(action.artistRelatedArtists, state)
  ),
  on(ArtistRelatedArtistActions.deleteArtistRelatedArtist, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(ArtistRelatedArtistActions.deleteArtistRelatedArtists, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),
  on(ArtistRelatedArtistActions.loadArtistRelatedArtists, (state, action) =>
    adapter.setAll(action.artistRelatedArtists, state)
  ),
  on(ArtistRelatedArtistActions.clearArtistRelatedArtists, (state) =>
    adapter.removeAll(state)
  )
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
