import { Artist } from 'src/app/core/models/track.models';
import { artistMockData } from 'src/Test-utilities/artists-mock-data';
import { reducer, initialState } from '../reducers/top-artists.reducer';
import * as topUserArtistActions from '../actions/top-artists.actions'

describe('TopUserArtist Reducers', () => {
  it('should have a default state', () => {
    const action = { type: '' };
    const state = reducer(undefined, action);
    expect(state).toBe(initialState);
  });

  it('should add one item to store on add item', () => {
    const artists: Artist[] = artistMockData;
    const action = topUserArtistActions.loadTopUserArtistsSuccess({topUserArtists: artists});
    const state = reducer(undefined, action);
    expect(state.ids.length).toBe(artists.length);
    expect(state.entities[artistMockData[0].id]).toEqual(artistMockData[0]);
    expect(state.topUserArtistsLoaded).toBeTrue();
  });

});
