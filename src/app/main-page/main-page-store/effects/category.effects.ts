import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, retry } from 'rxjs';
import { CategoriesService } from '../../services/categories.service';
import { allCategoriesLoaded, loadCategories } from '../actions/category.actions';

@Injectable()
export class CategoryEffects {
  loadCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadCategories),

      concatMap(() => {
        return this.categoriesService.getAvailableCategories();
      }),
      map((categories) => {
        return allCategoriesLoaded({ categories: categories.items });
      })
    );
  });

  constructor(private actions$: Actions, private categoriesService: CategoriesService) {}
}
