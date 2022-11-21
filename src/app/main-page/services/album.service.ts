import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { map, switchMap, throwError } from 'rxjs';
import { Album, AlbumItem, Albums } from 'src/app/core/models/album.models';
import {
  addTopUserAlbum,
  deleteTopUserAlbum,
} from 'src/app/my-music-page/store/actions/top-albums.actions';
import { updateSavedItem } from 'src/app/saved-store/saved-item.actions';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  readonly URL = 'https://api.spotify.com/v1';

  getAlbum(albumId: string) {
    return this.http.get<Album>(`${this.URL}/albums/${albumId}`);
  }

  changeAlbumState(album: AlbumItem, saveState: boolean) {
    this.store.dispatch(
      updateSavedItem({ id: album.id, kind: 'album', isSaved: !saveState })
    );
    if (saveState) {
      this.store.dispatch(deleteTopUserAlbum({ id: album.id }));
      this.snackbar.open('The album has been deleted!', 'Close', {
        duration: 2000,
        panelClass: ['bg-emerald-400', 'text-black', 'font-medium'],
      });
    } else {
      this.store.dispatch(addTopUserAlbum({ topUserAlbum: album }));
      this.snackbar.open('The album has been saved!', 'Close', {
        duration: 2000,
        panelClass: ['bg-emerald-400', 'text-black', 'font-medium'],
      });
    }
  }

  checkSavedAlbum(albumId: string) {
    const queryParams = new HttpParams().append('ids', albumId);

    return this.http.get<boolean[]>(`${this.URL}/me/albums/contains`, {
      params: queryParams,
    });
  }

  getAlbumReleases(limit = 20, offset = 0) {
    return this.http
      .get<{ albums: Albums }>(`${this.URL}/browse/new-releases`, {
        params: this.getQueryParametersNewReleases(limit, offset),
      })
      .pipe(map((data) => data.albums));
  }

  getQueryParametersNewReleases(limit = 20, offset = 0) {
    if (0 <= limit && limit <= 50 && offset >= 0) {
      return new HttpParams().appendAll({
        'Content-Type': 'application/json',
        limit,
        offset,
      });
    }
    if (!environment.production) {
      console.warn(
        'The limit is between 0 and 50, check if it is in this range'
      );
      console.warn('now it is going to use default values instead');
    }

    return new HttpParams().appendAll({
      limit: 20,
      offset: 0,
    });
  }

  constructor(
    private http: HttpClient,
    private store: Store,
    private snackbar: MatSnackBar
  ) {}
}
