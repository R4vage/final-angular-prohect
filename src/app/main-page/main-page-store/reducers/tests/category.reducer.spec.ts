import { reducer, categoryInitialState } from '../category.reducer';
import * as categoriesStoreActions from '../../actions/category.actions'
import { CategoryItem } from 'src/app/core/models/categories.models';
import { categoriesMockData } from 'src/Test-utilities/categories-mock-data';
import { categoriesStoreMock } from 'src/Test-utilities/store-mocks-data';

describe('Categories Reducer', () => {
  it('should have a default state', () => {
    const action = { type: '' };
    const state = reducer(undefined, action);
    expect(state).toBe(categoryInitialState);
  });

  it('should add one item to store on add item', () => {
    const category: CategoryItem = categoriesMockData[0];
    const action = categoriesStoreActions.addCategory({ category });
    const state = reducer(undefined, action);
    expect(state.ids[0]).toBe(category.id);
    expect(state.entities[category.id]).toEqual(category);
  });

  it('should delete one item to store on delete item', () => {
    const initialState = categoriesStoreMock;
    const categoryId = initialState.ids[0];
    const action = categoriesStoreActions.deleteCategory({
      id: categoryId as string,
    });
    const state = reducer(initialState, action);
    expect(state.ids[0] === categoryId).toBeFalsy();
    expect(state.entities[categoryId]).toBeFalsy();
  });

  it('should add one item to store on upsert item', () => {
    const category: CategoryItem = categoriesMockData[0];
    const action = categoriesStoreActions.upsertCategory({ category });
    const state = reducer(undefined, action);
    expect(state.ids[0]).toBe(category.id);
    expect(state.entities[category.id]).toEqual(category);
  });

  it('should load items on load Item', () => {
    const categories: CategoryItem[] = categoriesMockData;
    const action = categoriesStoreActions.allCategoriesLoaded({ categories });
    const state = reducer(undefined, action);
    expect(state.allCategoriesLoaded).toBeTrue();
    expect(state.entities[categories[0].id]).toEqual(categories[0]);
  });
});