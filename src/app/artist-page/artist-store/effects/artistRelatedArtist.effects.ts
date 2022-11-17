import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs';
import { ArtistPageRestService } from '../../services/artist-page-rest.service';
import * as artistRelatedArtistsActions from '../actions/artist-related-artist.actions';

@Injectable()
export class ArtistRelatedArtistsEffect {
  loadSearch$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(artistRelatedArtistsActions.addArtistRelatedArtist),
      concatMap((action) => {
        return this.restArtistService
          .getArtistRelatedArtists(action.artistId)
          .pipe(
            map((res) => {
              return artistRelatedArtistsActions.addArtistRelatedArtistSuccess({
                artistRelatedArtist: { results: res, id: action.artistId },
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
