import { albumMockData, userAlbumsResponseMock } from 'src/Test-utilities/album-mock-data';
import { artistAlbumsMock } from 'src/Test-utilities/artists-mock-data';
import { reducer, initialState, ArtAlbums } from '../reducers/artist-albums.reducer';
import * as artistAlbumsActions from '../actions/artist-albums.actions'
import { artitstsMock } from 'src/Test-utilities/results-mock-data';

describe('Artist Album Reducer', () => {
  it('should have a default state', () => {
    const action = { type: '' };
    const state = reducer(undefined, action);
    expect(state).toBe(initialState);
  });

  it('should add one item to store on add item', () => {
    const albums: ArtAlbums = {id:'mock', results:artistAlbumsMock};
    const action = artistAlbumsActions.addArtistAlbumsSuccess({ artistAlbums: albums });
    const state = reducer(undefined, action);
    expect(state.ids[0]).toBe(albums.id);
    expect(state.entities[albums.id]).toEqual(albums);
  });
});

