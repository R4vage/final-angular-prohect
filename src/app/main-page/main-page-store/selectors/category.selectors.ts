import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CategoryState } from '../reducers/category.reducer';
import * as fromCategories from '../reducers/category.reducer';

export const selectCategoryState = createFeatureSelector<CategoryState>('categories');

export const selectAllCategories = createSelector(selectCategoryState, fromCategories.selectAll);

export const selectAllCategoriesEntities = createSelector(selectCategoryState, fromCategories.selectEntities);

export const areCategoriesLoaded = createSelector(selectCategoryState, (state) => {
  return state.allCategoriesLoaded;
});

export function isCategoryInStore(id: string) {
  return createSelector(selectAllCategories, (categories) => !!categories.find((category) => category.id === id && category.playlists));
}

export function selectCategoryById(idCategory: string | number) {
  return createSelector(selectAllCategoriesEntities, (state) => state[idCategory]);
}
