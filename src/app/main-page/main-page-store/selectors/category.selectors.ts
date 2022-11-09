import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CategoryState } from '../reducers/category.reducer';
import * as fromCategories from '../reducers/category.reducer';

export const selectCategoryState = createFeatureSelector<CategoryState>('categories');

export const selectAllCategories = createSelector(selectCategoryState, fromCategories.selectAll);

export const areCategoriesLoaded = createSelector(selectCategoryState, (state) => {
  return state.allCategoriesLoaded;
});
