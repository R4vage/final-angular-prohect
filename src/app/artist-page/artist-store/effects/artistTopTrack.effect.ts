import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { concatMap, map } from 'rxjs';
import { ArtistPageRestService } from '../../services/artist-page-rest.service';
import * as artistTopTracksActions from '../actions/artist-top-track.actions';

@Injectable()
export class ArtistTopTracksEffect {
  loadSearch$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(artistTopTracksActions.addArtistTopTrack),
      concatMap((action) => {
        return this.restArtistService.getArtistTopTracks(action.artistId).pipe(
          map((res) => {
            return artistTopTracksActions.addArtistTopTrackSuccess({
              artistTopTrack: { results: res, id: action.artistId },
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
