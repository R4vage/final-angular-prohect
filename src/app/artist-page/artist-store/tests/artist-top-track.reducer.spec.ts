import { reducer, initialState, ArtTopTracks } from '../reducers/artist-top-track.reducer';
import * as artistTopTracksStoreActions from '../actions/artist-top-track.actions'
import { trackMockData } from 'src/Test-utilities/track-mock-data';
import { artistTopTrackMock } from 'src/Test-utilities/artists-mock-data';

describe('ArtistDetails Reducer', () => {
  it('should have a default state', () => {
    const action = { type: '' };
    const state = reducer(undefined, action);
    expect(state).toBe(initialState);
  });

  it('should add one item to store on add item success', () => {
    const artistTopTracks:ArtTopTracks = {results:artistTopTrackMock, id:'mock'}
    const action = artistTopTracksStoreActions.addArtistTopTrackSuccess({artistTopTrack:artistTopTracks});
    const state = reducer(undefined, action);
    expect(state.ids[0]).toBe(artistTopTracks.id);
    expect(state.entities[artistTopTracks.id]).toEqual(artistTopTracks);
  });

  it('should add array of items to store on add items', () => {
    const artistTopTracks:ArtTopTracks[] = [{results:artistTopTrackMock, id:'mock'}]

    const action = artistTopTracksStoreActions.addArtistTopTracks({artistTopTracks:artistTopTracks});
    const state = reducer(initialState, action);
    expect(state.ids[0] === artistTopTracks[0].id).toBeTrue();
    expect(state.entities[artistTopTracks[0].id]).toBe(artistTopTracks[0]);
  });

  it('shouldnt modify store on add item call', () => {
    const action = artistTopTracksStoreActions.addArtistTopTrack({artistId:'mock'});
    const state = reducer(undefined, action);
    expect(state).toBe(initialState);
  });
});
