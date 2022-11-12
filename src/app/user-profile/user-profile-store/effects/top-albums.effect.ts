import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as topAlbumsActions from '../actions/top-albums.actions';
import { UserProfileRestService } from '../../services/user-profile-rest.service';
import { AlbumItem } from 'src/app/core/models/album.models';

@Injectable()
export class TopAlbumsEffects {
  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(topAlbumsActions.loadTopUserAlbums),
      concatMap(() =>
        this.restService.getUsersTopAlbums().pipe(
            map((data) => {
              let albumArray:AlbumItem[] = []
              data.items.map((item)=>{
                albumArray.push(item.album)
              })
            return topAlbumsActions.loadTopUserAlbumsSuccess({ topUserAlbums: albumArray })}),
          catchError((error) => of(topAlbumsActions.loadTopUserAlbumsFailure({ error }))) 
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private restService: UserProfileRestService
  ) {}
}
