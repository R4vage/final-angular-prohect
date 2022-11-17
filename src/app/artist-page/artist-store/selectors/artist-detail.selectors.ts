import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromArtistDetails from '../reducers/artist-detail.reducer';

export const selectArtistDetailsState =
  createFeatureSelector<fromArtistDetails.ArtistDetailsState>('artistDetails');

export const selectAllSearchEntities = createSelector(
  selectArtistDetailsState,
  fromArtistDetails.selectEntities
);
export function artistDetailsHasBeenDone(id: string) {
  return createSelector(selectArtistDetailsState, (artistDetails) => {
    return (artistDetails.ids as string[]).includes(id);
  });
}

export function selectArtistByValue(artistId: string) {
  return createSelector(selectAllSearchEntities, (state) => state[artistId]);
}
