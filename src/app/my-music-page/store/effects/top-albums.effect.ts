import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as topAlbumsActions from '../actions/top-albums.actions';
import { MyMusicPageRestService } from '../../services/my-music-page-rest.service';
import { AlbumItem } from 'src/app/core/models/album.models';
import { SavedItem } from 'src/app/saved-store/saved-item.reducer';
import { Store } from '@ngrx/store';
import {
  addSavedItemsSuccess,
  checkSavedItems,
} from 'src/app/saved-store/saved-item.actions';
import { checkSavedIds } from 'src/app/saved-store/saved-item.selectors';

@Injectable()
export class TopAlbumsEffects {
  loadAlbums$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(topAlbumsActions.loadTopUserAlbums),
      concatMap(() => {
        return this.restService.getUsersTopAlbums().pipe(
          map((data) => {
            let albumArray: AlbumItem[] = [];
            let newSavedItems: SavedItem[] = [];
            data.items.map((item) => {
              albumArray.push(item.album);
              newSavedItems.push({
                id: item.album.id,
                kind: 'album',
                isSaved: true,
              });
            });
            this.savedStore.dispatch(
              addSavedItemsSuccess({ savedItems: newSavedItems })
            );

            return topAlbumsActions.loadTopUserAlbumsSuccess({
              topUserAlbums: albumArray,
              totalItems: data.total,
            });
          }),
          catchError((error) =>
            of(topAlbumsActions.loadTopUserAlbumsFailure({ error }))
          )
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private restService: MyMusicPageRestService,
    private savedStore: Store<SavedItem>
  ) {}
}
