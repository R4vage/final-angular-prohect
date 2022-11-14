import { Action } from '@ngrx/store';
import { albumsInitialState, reducer } from '../albums.reducer';

describe('Albums Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(albumsInitialState, action);

      expect(result).toBe(albumsInitialState);
    });
  });
});
