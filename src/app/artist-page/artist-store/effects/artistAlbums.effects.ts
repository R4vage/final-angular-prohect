import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { concatMap, map } from 'rxjs';
import { checkSavedItems } from 'src/app/saved-store/saved-item.actions';
import { prepareIdArray } from 'src/app/saved-store/saved-item.helpers';
import { SavedItem } from 'src/app/saved-store/saved-item.reducer';
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
            let artistAlbumsIds = prepareIdArray(res.items);
            this.savedStore.dispatch(
              checkSavedItems({ ids: artistAlbumsIds, kind: 'album' })
            );
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
    private restArtistService: ArtistPageRestService,
    private savedStore: Store<SavedItem>
  ) {}
}
