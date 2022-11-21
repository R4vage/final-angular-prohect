import { createAction, props } from '@ngrx/store';
import { Search } from './search.reducer';
import { HttpErrorResponse } from '@angular/common/http';

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
  props<{ error: string }>()
);

export const addSearchs = createAction(
  '[Search/API] Add Searchs',
  props<{ searchs: Search[] }>()
);
