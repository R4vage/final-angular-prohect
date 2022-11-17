import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { concatMap, map } from 'rxjs';
import { checkSavedItems } from 'src/app/saved-store/saved-item.actions';
import { prepareIdArray } from 'src/app/saved-store/saved-item.helpers';
import { SavedItem } from 'src/app/saved-store/saved-item.reducer';
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
            let artistAlbumsIds = [res.id];
            this.savedStore.dispatch(
              checkSavedItems({ ids: artistAlbumsIds, kind: 'artist' })
            );
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
    private restArtistService: ArtistPageRestService,
    private savedStore: Store<SavedItem>
  ) {}
}
