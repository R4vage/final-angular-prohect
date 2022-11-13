import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { catchError, filter, finalize, first, Observable, of, take, tap } from 'rxjs';
import { addSearch } from '../search-store/search.actions';
import { SearchState } from '../search-store/search.reducer';
import { searchHasBeenDone } from '../search-store/search.selectors';

@Injectable({
  providedIn: 'root',
})
export class SearchResolver implements Resolve<boolean> {
  loading = false;
  constructor(private store: Store<SearchState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.pipe(
      select(searchHasBeenDone(route.params['value'])),
      tap({
        next: (hasSearchBeenDone) => {
            console.log(hasSearchBeenDone)
          if (!this.loading && !hasSearchBeenDone ) {
            
            this.loading = true;
            return this.store.dispatch(addSearch({ searchValue: route.params['value'] }));
          }
        },
      }),
      filter(() => {
        return true;
      }),
      first(),

      finalize(() => {
        this.loading = false;
      })
    );
  }
}
