import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAlbums from '../reducers/top-albums.reducer';

export const selectTopAlbumState =
  createFeatureSelector<fromAlbums.TopUserAlbumsState>('topUserAlbums');

export const selectAllTopAlbums = createSelector(
  selectTopAlbumState,
  fromAlbums.selectAll
);

export const selectAreTopAlbumsLoaded = createSelector(
  selectTopAlbumState,
  (state) => {
    return state.topAlbumsLoaded;
  }
);
