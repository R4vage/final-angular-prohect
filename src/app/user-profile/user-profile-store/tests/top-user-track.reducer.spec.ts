import { Track } from 'src/app/core/models/track.models';
import { topTracksResponseMock } from 'src/Test-utilities/user-profile-mock-data';
import { reducer, initialState } from '../reducers/top-track.reducer';
import * as topTracksActions from '../actions/top-track.actions'

describe('TopUserTracks Reducers', () => {
  it('should have a default state', () => {
    const action = { type: '' };
    const state = reducer(undefined, action);
    expect(state).toBe(initialState);
  });

  it('should add one item to store on add item', () => {
    const tracks: Track[] = topTracksResponseMock.items;
    const action = topTracksActions.loadTopUserTracksSuccess({topUserTracks: tracks});
    const state = reducer(undefined, action);
    expect(state.ids.length).toBe(tracks.length);
    expect(state.entities[tracks[0].id]).toEqual(tracks[0]);
    expect(state.topUserTracksLoaded).toBeTrue();
  });

  it('shouldnt modify the store on simple loadTopUserAlbums ', ()=>{
    const action = topTracksActions.loadTopUserTracks()
    const state = reducer(undefined, action);
    expect(state).toBe(initialState)
  })

  it('shouldnt modify the store on loadTopUserAlbums failure and should throw error', ()=>{
    const error = "something mockingly failed"
    const action = topTracksActions.loadTopUserTracksFailure({error:error})
    expect(function (){reducer(initialState, action)}).toThrowError(error);
  })

});
