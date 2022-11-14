import { Action } from '@ngrx/store';
import { reducer, categoryInitialState } from '../category.reducer';

describe('Category Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(categoryInitialState, action);

      expect(result).toBe(categoryInitialState);
    });
  });
});
