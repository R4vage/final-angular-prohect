import { reducer, initialState, SavedItem } from '../saved-item.reducer';
import * as savedItemActions from '../saved-item.actions'

describe('Search Reducers', () => {
  it('should have a default state', () => {
    const action = { type: '' };
    const state = reducer(undefined, action);
    expect(state).toBe(initialState);
  });

  it('should add one item to store on add item success', () => {
    const savedItem: SavedItem = { id: 'mock', kind:'album', isSaved:true };
    const action = savedItemActions.addSavedItemSuccess({savedItem: savedItem});
    const state = reducer(undefined, action);
    expect(state.ids.length).toBe(1);
    expect(state.entities['mock']).toEqual(savedItem);
  });

  it('shouldnt modify the store on simple addSavedItem ', () => {
    const savedItem: SavedItem = { id: 'mock', kind:'album', isSaved:true };

    const action = savedItemActions.addSavedItem(savedItem);
    const state = reducer(undefined, action);
    expect(state).toBe(initialState);
  });

  it('shouldnt modify the store on addSearch failure and should throw error', () => {
    const error = 'something mockingly failed';
    const action = savedItemActions.addSavedItemFailure({ error: error });
    expect(function () {
      reducer(initialState, action);
    }).toThrowError(error);
  });
});

