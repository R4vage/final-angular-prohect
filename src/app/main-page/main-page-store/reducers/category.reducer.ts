import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as CategoryActions from '../actions/category.actions';
import { CategoryItem } from 'src/app/core/models/categories.models';

export const categoriesFeatureKey = 'categories';

export interface CategoryState extends EntityState<CategoryItem> {
  allCategoriesLoaded: boolean;
}

export const adapter: EntityAdapter<CategoryItem> = createEntityAdapter<CategoryItem>();

export const categoryInitialState: CategoryState = adapter.getInitialState({
  allCategoriesLoaded: false,
});

export const reducer = createReducer(
  categoryInitialState,
  on(CategoryActions.allCategoriesLoaded, (state, action) => adapter.setAll(action.categories, { ...state, allCategoriesLoaded: true })),
  on(CategoryActions.addCategory, (state, action) => adapter.addOne(action.category, state)),
  on(CategoryActions.upsertCategory, (state, action) => adapter.upsertOne(action.category, state)),
  on(CategoryActions.addCategories, (state, action) => adapter.addMany(action.categories, state)),
  on(CategoryActions.upsertCategories, (state, action) => adapter.upsertMany(action.categories, state)),
  on(CategoryActions.updateCategory, (state, action) => adapter.updateOne(action.category, state)),
  on(CategoryActions.updateCategories, (state, action) => adapter.updateMany(action.categories, state)),
  on(CategoryActions.deleteCategory, (state, action) => adapter.removeOne(action.id, state)),
  on(CategoryActions.deleteCategories, (state, action) => adapter.removeMany(action.ids, state)),
  on(CategoryActions.clearCategories, (state) => adapter.removeAll(state))
);

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
