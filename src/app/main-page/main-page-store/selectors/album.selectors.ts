import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAlbums from '../reducers/albums.reducer';
import { AlbumState } from '../reducers/albums.reducer';

export const selectAlbumState = createFeatureSelector<AlbumState>('albums');

export const selectAllAlbums = createSelector(selectAlbumState, fromAlbums.selectAll);

export const areAlbumsLoaded = createSelector(selectAlbumState, (state) => {
  return state.allAlbumsLoaded;
});
