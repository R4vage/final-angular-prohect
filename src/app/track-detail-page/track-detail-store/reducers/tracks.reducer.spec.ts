import { Action } from '@ngrx/store';
import { reducer, initialState } from './tracks.reducer';

describe('Tracks Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
