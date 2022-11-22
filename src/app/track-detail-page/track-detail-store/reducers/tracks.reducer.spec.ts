import { Track } from 'src/app/core/models/track.models';
import { reducer, initialState } from './tracks.reducer';
import * as tracksActions from '../actions/tracks.actions'
import { trackMockData } from 'src/Test-utilities/track-mock-data';
import { savedTracksStoreMock } from 'src/Test-utilities/store-mocks-data';

describe('SavedTrack Reducer', () => {
  it('should have a default state', () => {
    const action = { type: '' };
    const state = reducer(undefined, action);
    expect(state).toBe(initialState);
  });

  it('should add one item to store on add item', () => {
    const track: Track = trackMockData;
    const action = tracksActions.addTrack({ track });
    const state = reducer(undefined, action);
    expect(state.ids[0]).toBe(track.id);
    expect(state.entities[track.id]).toEqual(track);
  });

  it('should delete one item to store on delete item', () => {
    const initialState = savedTracksStoreMock;
    const trackId = initialState.ids[0];
    const action = tracksActions.deleteTrack({
      id: trackId as string,
    });
    const state = reducer(initialState, action);
    expect(state.ids[0] === trackId).toBeFalsy();
    expect(state.entities[trackId]).toBeFalsy();
  });

  it('shouldnt modify the store on simple load track ', ()=>{
    const initialState = savedTracksStoreMock;
    const action = tracksActions.loadTrack({id:'mock'})
    const state = reducer(initialState, action);
    expect(state).toBe(initialState)
  })

  it('should delete items on delete items', () => {
    const initialState = savedTracksStoreMock;
    const action = tracksActions.deleteTracks({
      ids: initialState.ids as string[]
    });
    const state = reducer(initialState, action);
    expect(state.ids.length).toBeFalsy();
  })

});