import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { concatMap, map } from 'rxjs';
import { checkSavedItems } from 'src/app/saved-store/saved-item.actions';
import { prepareIdArray } from 'src/app/saved-store/saved-item.helpers';
import { SavedItem } from 'src/app/saved-store/saved-item.reducer';
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
              let artistAlbumsIds = prepareIdArray(res.artists);
              this.savedStore.dispatch(
                checkSavedItems({ ids: artistAlbumsIds, kind: 'artist' })
              );
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
    private restArtistService: ArtistPageRestService,
    private savedStore: Store<SavedItem>
  ) {}
}
