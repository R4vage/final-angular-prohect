import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTracks from '../reducers/tracks.reducer';
import { TrackState } from '../reducers/tracks.reducer';

export const selectTrackState = createFeatureSelector<TrackState>('tracks');

export const selectAllTracks = createSelector(selectTrackState, fromTracks.selectAll);
export const selectAllTracksEntities = createSelector(selectTrackState, fromTracks.selectEntities);

export function isTrackInStore(id: string) {
  return createSelector(selectAllTracks, (tracks) => !!tracks.find((track) => track.id === id));
}

export function selectTrackById(idTrack: string | number) {
  return createSelector(selectAllTracksEntities, (state) => state[idTrack]);
}
