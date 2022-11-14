import { Action, createReducer, on } from '@ngrx/store';
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
  on(SearchActions.addSearchSuccess, (state, action) =>
    adapter.addOne(action.search, state)
  ),
  on(SearchActions.addSearch, (state) => state),
  on(SearchActions.addSearchFailure, (state, action) => {
    throw new Error(action.error.message);
  }),

  on(SearchActions.upsertSearch, (state, action) =>
    adapter.upsertOne(action.search, state)
  ),
  on(SearchActions.addSearchs, (state, action) =>
    adapter.addMany(action.searchs, state)
  ),
  on(SearchActions.upsertSearchs, (state, action) =>
    adapter.upsertMany(action.searchs, state)
  ),
  on(SearchActions.updateSearch, (state, action) =>
    adapter.updateOne(action.search, state)
  ),
  on(SearchActions.updateSearchs, (state, action) =>
    adapter.updateMany(action.searchs, state)
  ),
  on(SearchActions.deleteSearch, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(SearchActions.deleteSearchs, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),
  on(SearchActions.loadSearchs, (state, action) =>
    adapter.setAll(action.searchs, state)
  ),
  on(SearchActions.clearSearchs, (state) => adapter.removeAll(state))
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
