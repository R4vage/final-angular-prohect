import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap, filter } from 'rxjs/operators';
import { of } from 'rxjs';
import * as topAlbumsActions from '../actions/top-albums.actions';
import { MyMusicPageRestService } from '../../services/my-music-page-rest.service';
import { AlbumItem } from 'src/app/core/models/album.models';
import { SavedItem } from 'src/app/saved-store/saved-item.reducer';
import { Store } from '@ngrx/store';
import {
  addSavedItemsSuccess,
} from 'src/app/saved-store/saved-item.actions';
import { selectTotalSavedAlbumsCount } from '../selectors/top-albums.selectors';

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

  deleteAlbum$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(topAlbumsActions.deleteTopUserAlbum),
      concatMap(() => {
        return this.savedStore.select(selectTotalSavedAlbumsCount).pipe(
          filter((itemsCount) => {
            return itemsCount.totalItems > 20 && itemsCount.currentItems < 10;
          }),
          map(() => {
            return topAlbumsActions.loadTopUserAlbums();
          }),
          catchError((error) =>
            of(
              topAlbumsActions.loadTopUserAlbumsFailure({ error: error.message })
            )
          )
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private restService: MyMusicPageRestService,
    private savedStore: Store
  ) {}
}
