import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, switchMap, throwError } from 'rxjs';
import { Album, AlbumItem, Albums } from 'src/app/core/models/album.models';
import { addTopUserAlbum, deleteTopUserAlbum } from 'src/app/my-music-page/store/actions/top-albums.actions';
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

  saveAlbum(albumId: string, album:AlbumItem) {
    this.store.dispatch(addTopUserAlbum({topUserAlbum:album}))
    this.store.dispatch(updateSavedItem({id:albumId, kind:'album', isSaved:true}))
  }

  deleteAlbum(albumId: string) {
    this.store.dispatch(deleteTopUserAlbum({id:albumId}))
    this.store.dispatch(updateSavedItem({id:albumId, kind:'album', isSaved:false}))
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
      console.warn('The limit is between 0 and 50, check if it is in this range');
      console.warn('now it is going to use default values instead');
    }

    return new HttpParams().appendAll({
      limit: 20,
      offset: 0,
    });
  }

  constructor(private http: HttpClient, private store:Store) {}
}
