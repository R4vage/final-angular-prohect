import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromArtistAlbums from '../reducers/artist-albums.reducer';

export const selectArtistAlbumsState =
  createFeatureSelector<fromArtistAlbums.ArtistAlbumsState>('artistAlbums');

export const selectAllSearchEntities = createSelector(
  selectArtistAlbumsState,
  fromArtistAlbums.selectEntities
);

export function artistAlbumsHasBeenDone(id: string) {
  return createSelector(selectArtistAlbumsState, (artistAlbums) => {
    return (artistAlbums.ids as string[]).includes(id);
  });
}

export function selectArtistAlbumsByValue(artistId: string) {
  return createSelector(selectAllSearchEntities, (state) => state[artistId]);
}
