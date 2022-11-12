import { Action } from '@ngrx/store';
import { playlistInitialState, reducer } from '../playlists.reducer';

describe('Playlists Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(playlistInitialState, action);

      expect(result).toBe(playlistInitialState);
    });
  });
});
