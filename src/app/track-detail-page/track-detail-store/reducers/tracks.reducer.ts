import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Track } from 'src/app/core/models/track.models';
import * as TrackActions from '../actions/tracks.actions';

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
  on(TrackActions.addTrack, (state, action) =>
    adapter.addOne(action.track, state)
  ),
  on(TrackActions.deleteTrack, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(TrackActions.deleteTracks, (state, action) =>
    adapter.removeMany(action.ids, state)
  )
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
