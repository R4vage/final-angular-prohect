import { Injectable } from '@angular/core';
import { act, Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  map,
  concatMap,
  tap,
  filter,
  mergeMap,
} from 'rxjs/operators';
import { of } from 'rxjs';
import * as savedItemsActions from './saved-item.actions';
import { SavedItemRestService } from './saved-item-rest.service';
import { Kind, SavedItem } from './saved-item.reducer';
import { Store } from '@ngrx/store';
import { checkSavedIds } from './saved-item.selectors';

@Injectable()
export class SavedItemsEffects {
  checkSaved$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(savedItemsActions.checkSavedItems),
      mergeMap((action) => {
        return this.savedStore.select(checkSavedIds(action.ids)).pipe(
          map((idsNotFound) => {
            if (idsNotFound.length > 0) {
              if(action.kind === 'playlist') {
              }
              return savedItemsActions.addSavedItems({
                ids: idsNotFound,
                kind: action.kind,
              });
            } else {
              return savedItemsActions.alreadyLoaded();
            }
          })
        );
      })
    );
  });

  addSavedItems$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(savedItemsActions.addSavedItems),
      mergeMap((action) => {
        return this.restService
          .getProperCheckEndpoint(action.ids, action.kind)
          .pipe(
            map((idsStates) => {
              
              return this.prepareAction(idsStates, action.ids, action.kind);
            })
          );
      }),
      catchError((error) => of(savedItemsActions.addSavedItemFailure(error)))
    );
  });

  updateSaved$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(savedItemsActions.updateSavedItem),
      mergeMap((action) => {
        return this.restService
          .getProperSaveEndpoint(action.id, action.kind, action.isSaved)
          .pipe(
            map(() => {
              return savedItemsActions.updateSavedItemSuccess({
                savedItem: {
                  id: action.id,
                  changes: { isSaved: action.isSaved },
                },
              });
            })
          );
      }),
      catchError((error) => of(savedItemsActions.updateSavedItemFailure(error)))
    );
  });

  constructor(
    private actions$: Actions,
    private restService: SavedItemRestService,
    private savedStore: Store<SavedItem>
  ) {}

  prepareAction(idsStates: boolean[], actionIds: string[], kind: Kind) {
    let toBeSavedItems: SavedItem[] = [];
    actionIds.map((id, index) => {
      let newSavedItem: SavedItem = {
        id: id,
        isSaved: idsStates[index],
        kind: kind,
      };
      toBeSavedItems.push(newSavedItem);
    });
    return savedItemsActions.addSavedItemsSuccess({
      savedItems: toBeSavedItems,
    });
  }

  prepareItem(id: string, kind: Kind, isSaved: boolean): SavedItem {
    return {
      id: id,
      kind: kind,
      isSaved: isSaved,
    };
  }
}
