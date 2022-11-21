import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as searchesActions from './search.actions';
import { SearchRestService } from '../services/search-rest.service';
import { prepareIdArray } from 'src/app/saved-store/saved-item.helpers';
import { Kind, SavedItem } from 'src/app/saved-store/saved-item.reducer';
import { Store } from '@ngrx/store';
import { checkSavedItems } from 'src/app/saved-store/saved-item.actions';

@Injectable()
export class SearchesEffects {
  loadSearch$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(searchesActions.addSearch),
      concatMap((action) => {
        return this.restService.searchItem(action.searchValue).pipe(
          map((res) => {
            for (const [property, value] of Object.entries(res)) {
              if (property !== 'playlists') {
                let trackIds = prepareIdArray(value.items);
                this.savedStore.dispatch(
                  checkSavedItems({
                    ids: trackIds,
                    kind: property.slice(0, -1) as Kind,
                  })
                );
              }
            }
            return searchesActions.addSearchSuccess({
              search: { results: res, id: action.searchValue },
            });
          }),
          catchError((error) => of(searchesActions.addSearchFailure({ error })))
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private restService: SearchRestService,
    private savedStore: Store<SavedItem>
  ) {}
}
