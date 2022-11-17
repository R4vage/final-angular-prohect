import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs';
import { ArtistPageRestService } from '../../services/artist-page-rest.service';
import * as artistDetailsActions from '../actions/artist-detail.actions';

@Injectable()
export class ArtistDetailsEffect {
  loadSearch$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(artistDetailsActions.addArtistDetail),
      concatMap((action) => {
        return this.restArtistService.getArtistDetails(action.artistId).pipe(
          map((res) => {
            return artistDetailsActions.addArtistDetailSuccess({
              artistDetail: { results: res, id: action.artistId },
            });
          })
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private restArtistService: ArtistPageRestService
  ) {}
}
