import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, finalize, first, Observable, of, tap } from 'rxjs';
import { loadCategories } from '../main-page-store/actions/category.actions';
import { CategoryState } from '../main-page-store/reducers/category.reducer';
import { areCategoriesLoaded } from '../main-page-store/selectors/category.selectors';

@Injectable({
  providedIn: 'root',
})
export class CategoriesResolver implements Resolve<boolean> {
  loading = false;
  constructor(private store: Store<CategoryState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.pipe(
      select(areCategoriesLoaded),
      tap({
        next: (categoriesLoaded) => {
          if (!this.loading && !categoriesLoaded) {
            this.loading = true;
            this.store.dispatch(loadCategories());
          }
        },
      }),

      filter((categoryLoaded) => {
        return categoryLoaded;
      }),
      first(),
      finalize(() => {
        this.loading = false;
      })
    );
  }
}
