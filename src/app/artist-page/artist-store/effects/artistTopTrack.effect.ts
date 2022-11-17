import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { concatMap, map } from 'rxjs';
import { checkSavedItems } from 'src/app/saved-store/saved-item.actions';
import { prepareIdArray } from 'src/app/saved-store/saved-item.helpers';
import { SavedItem } from 'src/app/saved-store/saved-item.reducer';
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
            let artistAlbumsIds = prepareIdArray(res.tracks);
            this.savedStore.dispatch(
              checkSavedItems({ ids: artistAlbumsIds, kind: 'track' })
            );
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
    private restArtistService: ArtistPageRestService,
    private savedStore: Store<SavedItem>
  ) {}
}
