import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as TrackActions from '../actions/tracks.actions';
import { Track } from 'src/app/core/models/track.models';

export const tracksesFeatureKey = 'tracks';

export interface TrackState extends EntityState<Track> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Track> = createEntityAdapter<Track>();

export const initialState: TrackState = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(TrackActions.addTrack, (state, action) => adapter.addOne(action.track, state)),
  on(TrackActions.upsertTrack, (state, action) => adapter.upsertOne(action.track, state)),
  on(TrackActions.addTracks, (state, action) => adapter.addMany(action.tracks, state)),
  on(TrackActions.upsertTracks, (state, action) => adapter.upsertMany(action.tracks, state)),
  on(TrackActions.updateTrack, (state, action) => adapter.updateOne(action.track, state)),
  on(TrackActions.updateTracks, (state, action) => adapter.updateMany(action.tracks, state)),
  on(TrackActions.deleteTrack, (state, action) => adapter.removeOne(action.id, state)),
  on(TrackActions.deleteTracks, (state, action) => adapter.removeMany(action.ids, state)),
  on(TrackActions.allTracksLoaded, (state, action) => adapter.setAll(action.tracks, state)),
  on(TrackActions.clearTracks, (state) => adapter.removeAll(state))
);

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
