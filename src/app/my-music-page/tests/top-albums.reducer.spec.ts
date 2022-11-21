import { AlbumItem } from 'src/app/core/models/album.models';
import { albumMockData } from 'src/Test-utilities/album-mock-data';
import { topUserAlbumsStoreMock } from 'src/Test-utilities/store-mocks-data';
import * as savedAlbumsActions from '../store/actions/top-albums.actions';
import { reducer, initialState } from '../store/reducers/top-albums.reducer';

describe('TopUserAlbum Reducer', () => {
  it('should have a default state', () => {
    const action = { type: '' };
    const state = reducer(undefined, action);
    expect(state).toBe(initialState);
  });

  it('should add one item to store on add item', () => {
    const album: AlbumItem = albumMockData[0];
    const action = savedAlbumsActions.addTopUserAlbum({ topUserAlbum: album });
    const state = reducer(undefined, action);
    expect(state.ids[0]).toBe(album.id);
    expect(state.entities[album.id]).toEqual(album);
    expect(state.totalItems).toBe(1);
  });

  it('should delete one item to store on delete item', () => {
    const initialState = topUserAlbumsStoreMock;
    const initialTotalItems = initialState.ids.length;
    const albumId = initialState.ids[0];
    const action = savedAlbumsActions.deleteTopUserAlbum({
      id: albumId as string,
    });
    const state = reducer(initialState, action);
    expect(state.ids[0] === albumId).toBeFalsy();
    expect(state.entities[albumId]).toBeFalsy();
    expect(state.totalItems).toBe(initialTotalItems - 1);
  });

  it('should add one item to store on upsert item', () => {
    const album: AlbumItem = albumMockData[0];
    const action = savedAlbumsActions.upsertTopUserAlbum({
      topUserAlbum: album,
    });
    const state = reducer(undefined, action);
    expect(state.ids[0]).toBe(album.id);
    expect(state.entities[album.id]).toEqual(album);
  });

  it('should add albums to store on upsert albums', () => {
    const albums: AlbumItem[] = albumMockData;
    const action = savedAlbumsActions.upsertTopUserAlbums({
      topUserAlbums: albums,
    });
    const state = reducer(undefined, action);
    expect(state.ids.length).toBe(albums.length);
  });

  it('should add albums to store on add albums', () => {
    const albums: AlbumItem[] = albumMockData;
    const action = savedAlbumsActions.addTopUserAlbums({
      topUserAlbums: albums,
    });
    const state = reducer(undefined, action);
    expect(state.ids.length).toBe(albums.length);
  });
});
