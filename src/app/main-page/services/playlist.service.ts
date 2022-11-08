import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { MainPlaylistResponse } from 'src/app/core/models/playlist.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  private readonly URL = 'https://api.spotify.com/v1';

  getFeaturedPlaylists(limit = 20, offset = 0) {
    return this.http
      .get<MainPlaylistResponse>(`${this.URL}/browse/featured-playlists`, {
        params: this.getQueryParametersFeaturedPlaylists(),
      })
      .pipe(
        map((data) => {
          return data.playlists;
        })
      );
  }

  getQueryParametersFeaturedPlaylists(limit = 20, offset = 0) {
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
