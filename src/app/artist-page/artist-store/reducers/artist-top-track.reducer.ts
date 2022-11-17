import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as ArtistTopTrackActions from '../actions/artist-top-track.actions';
import { Track } from 'src/app/core/models/track.models';
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
  on(ArtistTopTrackActions.upsertArtistTopTrack, (state, action) =>
    adapter.upsertOne(action.artistTopTrack, state)
  ),
  on(ArtistTopTrackActions.addArtistTopTracks, (state, action) =>
    adapter.addMany(action.artistTopTracks, state)
  ),
  on(ArtistTopTrackActions.upsertArtistTopTracks, (state, action) =>
    adapter.upsertMany(action.artistTopTracks, state)
  ),
  on(ArtistTopTrackActions.updateArtistTopTrack, (state, action) =>
    adapter.updateOne(action.artistTopTrack, state)
  ),
  on(ArtistTopTrackActions.updateArtistTopTracks, (state, action) =>
    adapter.updateMany(action.artistTopTracks, state)
  ),
  on(ArtistTopTrackActions.deleteArtistTopTrack, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(ArtistTopTrackActions.deleteArtistTopTracks, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),
  on(ArtistTopTrackActions.loadArtistTopTracks, (state, action) =>
    adapter.setAll(action.artistTopTracks, state)
  ),
  on(ArtistTopTrackActions.clearArtistTopTracks, (state) =>
    adapter.removeAll(state)
  )
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
