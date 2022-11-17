import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromArtistTopTracks from '../reducers/artist-top-track.reducer';

export const selectArtistTopTracksState =
  createFeatureSelector<fromArtistTopTracks.ArtistTopTracksState>(
    'artistTopTracks'
  );

export const selectAllSearchEntities = createSelector(
  selectArtistTopTracksState,
  fromArtistTopTracks.selectEntities
);

export function artistTopTracksHasBeenDone(id: string) {
  return createSelector(selectArtistTopTracksState, (artistTopTracks) => {
    return (artistTopTracks.ids as string[]).includes(id);
  });
}

export function selectArtistTopTracksByValue(artistId: string) {
  return createSelector(selectAllSearchEntities, (state) => state[artistId]);
}
