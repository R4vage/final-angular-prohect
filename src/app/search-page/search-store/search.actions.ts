import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Search } from './search.reducer';
import { HttpErrorResponse } from '@angular/common/http';

export const loadSearchs = createAction(
  '[Search/API] Load Searchs',
  props<{ searchs: Search[] }>()
);

export const addSearch = createAction(
  '[Search/API] Add Search',
  props<{ searchValue: string }>()
);

export const addSearchSuccess = createAction(
  '[Search/API] Add Search Success',
  props<{ search: Search }>()
);

export const addSearchFailure = createAction(
  '[Search/API] Add Search Failure',
  props<{ error: HttpErrorResponse }>()
);

export const upsertSearch = createAction(
  '[Search/API] Upsert Search',
  props<{ search: Search }>()
);

export const addSearchs = createAction(
  '[Search/API] Add Searchs',
  props<{ searchs: Search[] }>()
);

export const upsertSearchs = createAction(
  '[Search/API] Upsert Searchs',
  props<{ searchs: Search[] }>()
);

export const updateSearch = createAction(
  '[Search/API] Update Search',
  props<{ search: Update<Search> }>()
);

export const updateSearchs = createAction(
  '[Search/API] Update Searchs',
  props<{ searchs: Update<Search>[] }>()
);

export const deleteSearch = createAction(
  '[Search/API] Delete Search',
  props<{ id: string }>()
);

export const deleteSearchs = createAction(
  '[Search/API] Delete Searchs',
  props<{ ids: string[] }>()
);

export const clearSearchs = createAction('[Search/API] Clear Searchs');
