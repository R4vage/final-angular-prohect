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

  on(TopUserTrackActions.loadTopUserTracks, (state) => state),
  on(TopUserTrackActions.loadTopUserTracksSuccess, (state, action) =>
    adapter.setAll(action.topUserTracks, {
      ...state,
      topUserTracksLoaded: true,
    })
  ),
  on(TopUserTrackActions.loadTopUserTracksFailure, (state, action) => {
    throw new Error(action.error);
  })
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
