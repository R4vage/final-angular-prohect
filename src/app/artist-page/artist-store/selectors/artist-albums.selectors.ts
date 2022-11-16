import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromArtistAlbums from '../reducers/artist-albums.reducer';

export const selectArtistAlbumsState =
  createFeatureSelector<fromArtistAlbums.ArtistAlbumsState>('artistAlbums');
export const selectAreArtistAlbumsLoaded = createSelector(
  selectArtistAlbumsState,
  (state) => {
    return state.artistAlbumsLoaded;
  }
);
