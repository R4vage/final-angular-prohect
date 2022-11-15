import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as topArtistActions from '../actions/top-artists.actions';
import { UserProfileRestService } from '../../services/user-profile-rest.service';
import { Store } from '@ngrx/store';
import { SavedItem } from 'src/app/saved-store/saved-item.reducer';
import { checkSavedItems } from 'src/app/saved-store/saved-item.actions';
import { prepareIdArray } from 'src/app/saved-store/saved-item.helpers';

@Injectable()
export class TopArtistEffects {
  loadArtists$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(topArtistActions.loadTopUserArtists),
      concatMap(() =>
        this.restService.getUsersTopArtists().pipe(
          map((data) => {
            let artistIds = prepareIdArray(data.items);
            this.savedStore.dispatch(
              checkSavedItems({ ids: artistIds, kind: 'artist' })
            );
            return topArtistActions.loadTopUserArtistsSuccess({
              topUserArtists: data.items,
            });
          }),
          catchError((error) =>
            of(topArtistActions.loadTopUserArtistFailure({ error }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private restService: UserProfileRestService,
    private savedStore: Store<SavedItem>
  ) {}
}
