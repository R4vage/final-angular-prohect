import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as ArtistTopTrackActions from '../actions/artist-top-track.actions';
import { ArtistTopTracks } from 'src/app/core/models/artist.models';

export interface ArtTopTracks {
  id: string;
  results: ArtistTopTracks;
}

export const artistTopTracksFeatureKey = 'artistTopTracks';

export interface ArtistTopTracksState extends EntityState<ArtTopTracks> {
  // additional entities state properties
}

export const adapter: EntityAdapter<ArtTopTracks> =
  createEntityAdapter<ArtTopTracks>();

export const initialState: ArtistTopTracksState = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(ArtistTopTrackActions.addArtistTopTrackSuccess, (state, action) =>
    adapter.addOne(action.artistTopTrack, state)
  ),
  on(ArtistTopTrackActions.addArtistTopTrack, (state) => state),

  on(ArtistTopTrackActions.addArtistTopTracks, (state, action) =>
    adapter.addMany(action.artistTopTracks, state)
  )
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
