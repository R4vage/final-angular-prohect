import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAlbums from '../reducers/albums.reducer';
import { AlbumState } from '../reducers/albums.reducer';

export const selectAlbumState = createFeatureSelector<AlbumState>('albums');

export const selectAllAlbums = createSelector(selectAlbumState, fromAlbums.selectAll);

export const selectAllAlbumsEntities = createSelector(selectAlbumState, fromAlbums.selectEntities);

export const areAlbumsLoaded = createSelector(selectAlbumState, (state) => {
  return state.allAlbumsLoaded;
});

export function isAlbumInStore(id: string) {
  return createSelector(selectAllAlbums, (albums) => !!albums.find((album) => album.id === id));
}

export function selectAlbumById(idAlbum: string | number) {
  return createSelector(selectAllAlbumsEntities, (state) => state[idAlbum]);
}
