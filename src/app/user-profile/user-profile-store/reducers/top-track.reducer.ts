import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as TopUserTrackActions from '../actions/top-track.actions';
import { Track } from 'src/app/core/models/track.models';

export const topUserTracksFeatureKey = 'topUserTracks';

export interface TopUserTracksState extends EntityState<Track> {
  topUserTracksLoaded: boolean;
}

export const adapter: EntityAdapter<Track> = createEntityAdapter<Track>();

export const initialState: TopUserTracksState = adapter.getInitialState({
  topUserTracksLoaded: false,
});

export const reducer = createReducer(
  initialState,
  on(TopUserTrackActions.addTopUserTrack, (state, action) =>
    adapter.addOne(action.topUserTrack, state)
  ),
  on(TopUserTrackActions.upsertTopUserTrack, (state, action) =>
    adapter.upsertOne(action.topUserTrack, state)
  ),
  on(TopUserTrackActions.addTopUserTracks, (state, action) =>
    adapter.addMany(action.topUserTracks, state)
  ),
  on(TopUserTrackActions.upsertTopUserTracks, (state, action) =>
    adapter.upsertMany(action.topUserTracks, state)
  ),
  on(TopUserTrackActions.updateTopUserTrack, (state, action) =>
    adapter.updateOne(action.topUserTrack, state)
  ),
  on(TopUserTrackActions.updateTopUserTracks, (state, action) =>
    adapter.updateMany(action.topUserTracks, state)
  ),
  on(TopUserTrackActions.deleteTopUserTrack, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(TopUserTrackActions.deleteTopUserTracks, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),

  on(TopUserTrackActions.loadTopUserTracks, (state) => state),
  on(TopUserTrackActions.loadTopUserTracksSuccess, (state, action) =>
    adapter.setAll(action.topUserTracks, {
      ...state,
      topUserTracksLoaded: true,
    })
  ),
  on(TopUserTrackActions.loadTopUserTracksFailure, (state, action) => {
    throw new Error(action.error);
  }),
  on(TopUserTrackActions.clearTopUserTracks, (state) =>
    adapter.removeAll(state)
  )
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
