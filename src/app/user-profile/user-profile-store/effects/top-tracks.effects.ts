import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as topTrackActions from '../actions/top-track.actions';
import { UserProfileRestService } from '../../services/user-profile-rest.service';
import { Track } from 'src/app/core/models/track.models';

@Injectable()
export class TopTracksEffect {
  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(topTrackActions.loadTopUserTracks),
      concatMap(() =>
        this.restService.getUsersTopTracks().pipe(
          map((data) => {
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
    private restService: UserProfileRestService
  ) {}
}