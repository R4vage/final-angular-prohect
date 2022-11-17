import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as topTrackActions from '../actions/top-track.actions';
import { UserProfileRestService } from '../../services/user-profile-rest.service';
import { Track } from 'src/app/core/models/track.models';
import { checkSavedItems } from 'src/app/saved-store/saved-item.actions';
import { prepareIdArray } from 'src/app/saved-store/saved-item.helpers';
import { Store } from '@ngrx/store';
import { SavedItem } from 'src/app/saved-store/saved-item.reducer';

@Injectable()
export class TopTracksEffect {
  loadTracks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(topTrackActions.loadTopUserTracks),
      concatMap(() =>
        this.restService.getUsersTopTracks().pipe(
          map((data) => {
            let trackIds = prepareIdArray(data.items);
            this.savedStore.dispatch(
              checkSavedItems({ ids: trackIds, kind: 'track' })
            );
            return topTrackActions.loadTopUserTracksSuccess({
              topUserTracks: data.items,
            });
          }),
          catchError((error) =>
            of(topTrackActions.loadTopUserTracksFailure({ error }))
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
