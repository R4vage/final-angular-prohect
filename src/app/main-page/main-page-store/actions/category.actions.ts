import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { CategoryItem } from 'src/app/core/models/categories.models';

export const loadCategories = createAction('[Category/API] Load Categories');
export const loadCategory = createAction('[Resolver] Load Category', props<{ id: string }>());

export const allCategoriesLoaded = createAction('[Category/API] All Categories Loaded', props<{ categories: CategoryItem[] }>());

export const addCategory = createAction('[Category/API] Add Category', props<{ category: CategoryItem }>());

export const upsertCategory = createAction('[Category/API] Upsert Category', props<{ category: CategoryItem }>());



export const deleteCategory = createAction('[Category/API] Delete Category', props<{ id: string }>());


