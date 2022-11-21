import { reducer, initialState, Search } from './search.reducer';
import * as searchActions from './search.actions';
import { resultsMockData } from 'src/Test-utilities/results-mock-data';

describe('Search Reducers', () => {
  it('should have a default state', () => {
    const action = { type: '' };
    const state = reducer(undefined, action);
    expect(state).toBe(initialState);
  });

  it('should add one item to store on add item', () => {
    const results: Search = { id: 'mock', results: resultsMockData };
    const action = searchActions.addSearchSuccess({ search: results });
    const state = reducer(undefined, action);
    expect(state.ids.length).toBe(1);
    expect(state.entities['mock']).toEqual(results);
  });

  it('shouldnt modify the store on simple addSearch ', () => {
    const action = searchActions.addSearch({ searchValue: 'mock' });
    const state = reducer(undefined, action);
    expect(state).toBe(initialState);
  });

  it('shouldnt modify the store on addSearch failure and should throw error', () => {
    const error = 'something mockingly failed';
    const action = searchActions.addSearchFailure({ error: error });
    expect(function () {
      reducer(initialState, action);
    }).toThrowError(error);
  });
});
