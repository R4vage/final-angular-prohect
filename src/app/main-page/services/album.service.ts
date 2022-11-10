import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Albums } from 'src/app/core/models/album.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  readonly URL = 'https://api.spotify.com/v1';

  getAlbumReleases(limit = 20, offset = 0) {
    return this.http
      .get<{ albums: Albums }>(`${this.URL}/browse/new-releases`, {
        params: this.getQueryParametersNewReleases(),
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
