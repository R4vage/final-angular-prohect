import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTracks from '../reducers/saved-tracks.reducer';

export const selectSavedTrackState =
  createFeatureSelector<fromTracks.SavedTrackState>(
    fromTracks.savedTracksFeatureKey
  );

export const selectAllSavedTracks = createSelector(
  selectSavedTrackState,
  fromTracks.selectAll
);

export const selectAreSavedTracksLoaded = createSelector(
  selectSavedTrackState,
  (state) => {
    return state.savedTracksLoaded;
  }
);

export const selectTotalSavedTracksCount = createSelector(
  selectSavedTrackState,
  (state) => {
    return {
      totalItems: state.totalItems,
      currentItems: state.ids.length,
    };
  }
);
