import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as topAlbumsActions from '../actions/top-albums.actions';
import { UserProfileRestService } from '../../services/user-profile-rest.service';

@Injectable()
export class TopAlbumsEffects {
  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(topAlbumsActions.loadTopUserAlbums),
      concatMap(() =>
        this.restService.getUsersTopAlbums().pipe(
            map((data) => {
            return topAlbumsActions.loadTopUserAlbumsSuccess({ topUserAlbums: data.items })}),
          catchError((error) => of(topAlbumsActions.loadTopUserAlbumsFailure({ error }))) 
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private restService: UserProfileRestService
  ) {}
}
