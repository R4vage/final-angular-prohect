import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTracks from '../reducers/top-track.reducer';

export const selectTopTracksState =
  createFeatureSelector<fromTracks.TopUserTracksState>('topUserTracks');

export const selectAllTopTracks = createSelector(
  selectTopTracksState,
  fromTracks.selectAll
);

export const selectAreTopTracksLoaded = createSelector(
  selectTopTracksState,
  (state) => {
    return state.topUserTracksLoaded;
  }
);
