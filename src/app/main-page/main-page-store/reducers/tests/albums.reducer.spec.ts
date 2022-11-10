import { albumsInitialState, reducer } from '../albums.reducer';

describe('Albums Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(albumsInitialState, action);

      expect(result).toBe(albumsInitialState);
    });
  });
});
