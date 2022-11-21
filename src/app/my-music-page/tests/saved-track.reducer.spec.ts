import { Track } from 'src/app/core/models/track.models';
import { trackMockData } from 'src/Test-utilities/track-mock-data';
import { reducer, initialState } from '../store/reducers/saved-tracks.reducer';
import * as savedTrackActions from '../store/actions/saved-tracks.actions';
import { savedTracksStoreMock } from 'src/Test-utilities/store-mocks-data';

describe('SavedTrack Reducer', () => {
  it('should have a default state', () => {
    const action = { type: '' };
    const state = reducer(undefined, action);
    expect(state).toBe(initialState);
  });

  it('should add one item to store on add item', () => {
    const track: Track = trackMockData;
    const action = savedTrackActions.addSavedTrack({ track });
    const state = reducer(undefined, action);
    expect(state.ids[0]).toBe(track.id);
    expect(state.entities[track.id]).toEqual(track);
    expect(state.totalItems).toBe(1);
  });

  it('should delete one item to store on delete item', () => {
    const initialState = savedTracksStoreMock;
    const initialTotalItems = initialState.ids.length;
    const trackId = initialState.ids[0];
    const action = savedTrackActions.deleteSavedTrack({
      id: trackId as string,
    });
    const state = reducer(initialState, action);
    expect(state.ids[0] === trackId).toBeFalsy();
    expect(state.entities[trackId]).toBeFalsy();
    expect(state.totalItems).toBe(initialTotalItems - 1);
  });

  it('should add one item to store on upsert item', () => {
    const track: Track = trackMockData;
    const action = savedTrackActions.upsertSavedTrack({ track });
    const state = reducer(undefined, action);
    expect(state.ids[0]).toBe(track.id);
    expect(state.entities[track.id]).toEqual(track);
  });

  it('shouldnt modify the store on simple loadTopUserAlbums ', ()=>{
    const initialState = savedTracksStoreMock;
    const action = savedTrackActions.loadSavedTracks()
    const state = reducer(initialState, action);
    expect(state).toBe(initialState)
  })

  it('shouldnt modify the store on loadTopUserAlbums failure and should throw error', ()=>{
    const initialState = savedTracksStoreMock;
    const error = "something mockingly failed"
    const action = savedTrackActions.loadSavedTracksFailure({error:error})
    expect(function (){reducer(initialState, action)}).toThrowError(error);
  })
});
