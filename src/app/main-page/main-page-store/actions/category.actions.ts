import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { CategoryItem } from 'src/app/core/models/categories.models';

export const loadCategories = createAction('[Category/API] Load Categories');
export const allCategoriesLoaded = createAction('[Category/API] All Categories Loaded', props<{ categories: CategoryItem[] }>());

export const addCategory = createAction('[Category/API] Add Category', props<{ category: CategoryItem }>());

export const upsertCategory = createAction('[Category/API] Upsert Category', props<{ category: CategoryItem }>());

export const addCategories = createAction('[Category/API] Add Categories', props<{ categories: CategoryItem[] }>());

export const upsertCategories = createAction('[Category/API] Upsert Categories', props<{ categories: CategoryItem[] }>());

export const updateCategory = createAction('[Category/API] Update Category', props<{ category: Update<CategoryItem> }>());

export const updateCategories = createAction('[Category/API] Update Categories', props<{ categories: Update<CategoryItem>[] }>());

export const deleteCategory = createAction('[Category/API] Delete Category', props<{ id: string }>());

export const deleteCategories = createAction('[Category/API] Delete Categories', props<{ ids: string[] }>());

export const clearCategories = createAction('[Category/API] Clear Categories');
