import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { CategoryItem } from 'src/app/core/models/categories.models';
import * as CategoryActions from '../actions/category.actions';

export const categoriesFeatureKey = 'categories';

export interface CategoryState extends EntityState<CategoryItem> {
  allCategoriesLoaded: boolean;
}

export const adapter: EntityAdapter<CategoryItem> =
  createEntityAdapter<CategoryItem>();

export const categoryInitialState: CategoryState = adapter.getInitialState({
  allCategoriesLoaded: false,
});

export const reducer = createReducer(
  categoryInitialState,
  on(CategoryActions.allCategoriesLoaded, (state, action) =>
    adapter.upsertMany(action.categories, {
      ...state,
      allCategoriesLoaded: true,
    })
  ),
  on(CategoryActions.addCategory, (state, action) =>
    adapter.addOne(action.category, state)
  ),
  on(CategoryActions.upsertCategory, (state, action) =>
    adapter.upsertOne(action.category, state)
  ),
  on(CategoryActions.deleteCategory, (state, action) =>
    adapter.removeOne(action.id, state)
  )
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
