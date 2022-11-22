import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as SearchActions from './search.actions';
import { SearchResults } from 'src/app/core/models/rest.models';

export interface Search {
  id: string;
  results: SearchResults;
}

export const searchesFeatureKey = 'searches';

export interface SearchState extends EntityState<Search> {}

export const adapter: EntityAdapter<Search> = createEntityAdapter<Search>();

export const initialState: SearchState = adapter.getInitialState({});

export const reducer = createReducer(
  initialState,
  on(SearchActions.addSearchSuccess, (state, action) => {
    return adapter.addOne(action.search, state);
  }),
  on(SearchActions.addSearch, (state) => state),
  on(SearchActions.addSearchFailure, (state, action) => {
    throw new Error(action.error);
  }),
  on(SearchActions.addSearchs, (state, action) =>
    adapter.addMany(action.searchs, state)
  )
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
