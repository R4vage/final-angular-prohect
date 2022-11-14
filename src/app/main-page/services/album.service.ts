import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, switchMap, throwError } from 'rxjs';
import { Album, Albums } from 'src/app/core/models/album.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  readonly URL = 'https://api.spotify.com/v1';

  getAlbum(albumId: string) {
    return this.http.get<Album>(`${this.URL}/albums/${albumId}`);
  }

  saveAlbum(albumId: string) {
    const queryParams = new HttpParams().append('ids', albumId);

    return this.checkSavedAlbum(albumId).pipe(
      switchMap((isAlbumSaved) => {
        if (!isAlbumSaved[0]) {
          return this.http.put(`${this.URL}/me/albums`, { ids: [albumId] }, { params: queryParams });
        }
        return throwError(() => Error('The album is already saved'));
      })
    );
  }

  deleteAlbum(albumId: string) {
    const queryParams = new HttpParams().append('ids', albumId);

    return this.checkSavedAlbum(albumId).pipe(
      switchMap((isAlbumSaved) => {
        if (isAlbumSaved[0]) {
          return this.http.delete(`${this.URL}/me/albums`, { params: queryParams });
        }
        return throwError(() => Error("The album wasn't in the User's Saved Albums"));
      })
    );
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

  constructor(private http: HttpClient) {}
}
