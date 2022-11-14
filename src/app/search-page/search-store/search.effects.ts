import { Injectable } from '@angular/core';
import { act, Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, take } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as searchesActions from './search.actions';
import { AlbumItem } from 'src/app/core/models/album.models';
import { SearchRestService } from '../services/search-rest.service';

@Injectable()
export class SearchesEffects {
  loadSearch$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(searchesActions.addSearch),
      concatMap((action) => {
          return this.restService.searchItem(action.searchValue).pipe(
              map((res) => {
                return searchesActions.addSearchSuccess({search:{results: res, id:action.searchValue }});
              }),
              catchError((error) => of(searchesActions.addSearchFailure({ error }))) 
          );
      }),
    );
  });

  constructor(
    private actions$: Actions,
    private restService: SearchRestService
  ) {}
}