import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs';
import { ArtistPageRestService } from '../../services/artist-page-rest.service';
import * as artistAlbumsActions from '../actions/artist-albums.actions';

@Injectable()
export class ArtistAlbumsEffect {
  loadSearch$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(artistAlbumsActions.addArtistAlbums),
      concatMap((action) => {
        return this.restArtistService.getArtistAlbums(action.artistId).pipe(
          map((res) => {
            return artistAlbumsActions.addArtistAlbumsSuccess({
              artistAlbums: { results: res, id: action.artistId },
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
