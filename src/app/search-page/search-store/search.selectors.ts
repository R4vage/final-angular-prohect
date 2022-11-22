import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSearches from './search.reducer';

export const selectSearchesState =
  createFeatureSelector<fromSearches.SearchState>('searches');

export const selectAllSearches = createSelector(
  selectSearchesState,
  fromSearches.selectAll
);
export const selectAllSearchEntities = createSelector(
  selectSearchesState,
  fromSearches.selectEntities
);

export function searchHasBeenDone(id: string) {
  return createSelector(selectSearchesState, (searches) => {
    return (searches.ids as string[]).includes(id);
  });
}

export function selectSearchByValue(idSearch: string) {
  return createSelector(selectAllSearchEntities, (state) => state[idSearch]);
}
