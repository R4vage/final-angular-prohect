import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as topAlbumsActions from '../actions/top-albums.actions';
import { MyMusicPageRestService } from '../../services/my-music-page-rest.service';
import { AlbumItem } from 'src/app/core/models/album.models';
import { SavedItem } from 'src/app/saved-store/saved-item.reducer';
import { Store } from '@ngrx/store';
import { checkSavedItems } from 'src/app/saved-store/saved-item.actions';

@Injectable()
export class TopAlbumsEffects {
  loadAlbums$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(topAlbumsActions.loadTopUserAlbums),
      concatMap(() =>
        this.restService.getUsersTopAlbums().pipe(
          map((data) => {
            let albumArray: AlbumItem[] = [];
            data.items.map((item) => {
              albumArray.push(item.album);
            });
            return topAlbumsActions.loadTopUserAlbumsSuccess({
              topUserAlbums: albumArray,
              totalItems: data.total
            });
          }),
          catchError((error) =>
            of(topAlbumsActions.loadTopUserAlbumsFailure({ error }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private restService: MyMusicPageRestService,
    private savedStore: Store<SavedItem>
  ) {}
}
