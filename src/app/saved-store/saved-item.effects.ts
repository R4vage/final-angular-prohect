import { Injectable } from '@angular/core';
import { act, Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap, filter, mergeMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as savedItemsActions from './saved-item.actions';
import { SavedItemRestService } from './saved-item-rest.service';
import { Kind, SavedItem } from './saved-item.reducer';
import { Store } from '@ngrx/store';
import { searchHasBeenDone } from '../search-page/search-store/search.selectors';
import { checkSavedIds } from './saved-item.selectors';
import { TypedAction } from '@ngrx/store/src/models';

@Injectable()
export class SavedItemsEffects {

  checkSaved$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(savedItemsActions.checkSavedItems),
      mergeMap((action) => {
        return this.savedStore.select(checkSavedIds(action.ids)).pipe(
          map((idsNotFound) => {
            if (idsNotFound.length > 0) {
              return savedItemsActions.addSavedItems({
                ids: idsNotFound,
                kind: action.kind,
              });
            }
            return savedItemsActions.alreadyLoaded();
          })
        );
      })
    );
  });

  addSavedItems$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(savedItemsActions.addSavedItems),
      concatMap((action) => {
        switch (action.kind) {
          case 'album':
            return this.restService.checkUserSavedAlbums(action.ids).pipe(
              map((idsStates) => {
                return this.prepareAction(idsStates, action.ids, action.kind);
              })
            );
          case 'artist':
            return this.restService.checkUsersFollowedArtists(action.ids).pipe(
              map((idsStates) => {
                return this.prepareAction(idsStates, action.ids, action.kind);
              })
            );
          case 'track':
            return this.restService.checkUserSavedTracks(action.ids).pipe(
              map((idsStates) => {
                return this.prepareAction(idsStates, action.ids, action.kind);
              })
            );
        }
        return of(savedItemsActions.alreadyLoaded());
      }),
      catchError((error) => of(savedItemsActions.addSavedItemFailure(error)))
    );
  });

  constructor(
    private actions$: Actions,
    private restService: SavedItemRestService,
    private savedStore: Store<SavedItem>
  ) {}

  prepareAction(
    idsStates: boolean[],
    actionIds: string[],
    kind: Kind
  ) {
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
}
