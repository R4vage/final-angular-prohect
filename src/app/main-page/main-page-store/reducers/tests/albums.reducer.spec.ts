import { albumsInitialState, reducer } from '../albums.reducer';
import * as albumsStoreActions from '../../actions/albums.actions';
import { AlbumItem } from 'src/app/core/models/album.models';
import { albumMockData } from 'src/Test-utilities/album-mock-data';
import { topUserAlbumsStoreMock } from 'src/Test-utilities/store-mocks-data';

describe('Albums Reducer', () => {
  it('should have a default state', () => {
    const action = { type: '' };
    const state = reducer(undefined, action);
    expect(state).toBe(albumsInitialState);
  });

  it('should add one item to store on add item', () => {
    const album: AlbumItem = albumMockData[0];
    const action = albumsStoreActions.addAlbum({ album });
    const state = reducer(undefined, action);
    expect(state.ids[0]).toBe(album.id);
    expect(state.entities[album.id]).toEqual(album);
  });

  it('should delete one item to store on delete item', () => {
    const initialState = { ...topUserAlbumsStoreMock, allAlbumsLoaded: true };
    const albumId = initialState.ids[0];
    const action = albumsStoreActions.deleteAlbum({
      id: albumId as string,
    });
    const state = reducer(initialState, action);
    expect(state.ids[0] === albumId).toBeFalsy();
    expect(state.entities[albumId]).toBeFalsy();
  });

  it('should add one item to store on upsert item', () => {
    const album: AlbumItem = albumMockData[0];
    const action = albumsStoreActions.upsertAlbum({ album });
    const state = reducer(undefined, action);
    expect(state.ids[0]).toBe(album.id);
    expect(state.entities[album.id]).toEqual(album);
  });

  it('should load items on load Item', () => {
    const albums: AlbumItem[] = albumMockData;
    const action = albumsStoreActions.allAlbumsLoaded({ albums });
    const state = reducer(undefined, action);
    expect(state.allAlbumsLoaded).toBeTrue();
    expect(state.entities[albums[0].id]).toEqual(albums[0]);
  });
});
