import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, finalize, first, Observable, of, tap } from 'rxjs';
import { loadCategory } from 'src/app/main-page/main-page-store/actions/category.actions';
import { CategoryState } from 'src/app/main-page/main-page-store/reducers/category.reducer';
import { isCategoryInStore } from 'src/app/main-page/main-page-store/selectors/category.selectors';

@Injectable({
  providedIn: 'root',
})
export class CategoryDetailResolver implements Resolve<boolean> {
  loading = false;
  constructor(private store: Store<CategoryState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.pipe(
      select(isCategoryInStore(route.params['id'])),
      tap({
        next: (isCategoryInStore) => {
          if (!this.loading && !isCategoryInStore) {
            this.loading = true;
            this.store.dispatch(loadCategory({ id: route.params['id'] }));
          }
        },
      }),
      filter((isCategoryInStore) => isCategoryInStore),

      first(),

      finalize(() => {
        this.loading = false;
      })
    );
  }
}
