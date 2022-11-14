import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map } from 'rxjs';
import { CategoriesService } from '../../services/categories.service';
import { allCategoriesLoaded, loadCategories, loadCategory, upsertCategory } from '../actions/category.actions';

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

  addCategory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadCategory),
      concatMap((action) => {
        return this.categoriesService.getCategoryPlaylists(action.id);
      }),
      catchError((err) => {
        this.router.navigateByUrl('/home');
        throw err;
      }),
      map((category) => {
        return upsertCategory({ category });
      })
    );
  });

  constructor(private actions$: Actions, private categoriesService: CategoriesService, private router: Router) {}
}
