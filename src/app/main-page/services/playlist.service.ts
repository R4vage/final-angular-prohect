import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, switchMap, throwError } from 'rxjs';
import { MainPlaylistResponse, Playlist } from 'src/app/core/models/playlist.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  readonly URL = 'https://api.spotify.com/v1';

  getPlaylist(playlistId: string, fields?: string) {
    const queryParams = fields ? new HttpParams().append('fields', fields) : new HttpParams();
    return this.http.get<Playlist>(`${this.URL}/playlists/${playlistId}`, { params: queryParams });
  }

  followPlaylist(userId: string, playlistId: string, isInUserPublicPlaylist = true) {
    return this.checkFollowedPlaylist(userId, playlistId).pipe(
      switchMap((isPlaylistFollowed) => {
        if (!isPlaylistFollowed[0]) {
          return this.http.put(`${this.URL}/playlists/${playlistId}/followers`, { public: isInUserPublicPlaylist });
        }
        return throwError(() => Error('The playlist is already followed'));
      })
    );
  }

  unfollowPlaylist(userId: string, playlistId: string) {
    return this.checkFollowedPlaylist(userId, playlistId).pipe(
      switchMap((isPlaylistFollowed) => {
        if (isPlaylistFollowed[0]) {
          return this.http.delete(`${this.URL}/playlists/${playlistId}/followers`);
        }
        return throwError(() => Error("The playlist wasn't in the User's followed Playlists"));
      })
    );
  }

  checkFollowedPlaylist(userId: string, playlistId: string) {
    const queryParams = new HttpParams().append('ids', userId);

    return this.http.get<boolean[]>(`${this.URL}/playlists/${playlistId}/followers/contains`, {
      params: queryParams,
    });
  }

  getFeaturedPlaylists(limit = 20, offset = 0) {
    return this.http
      .get<MainPlaylistResponse>(`${this.URL}/browse/featured-playlists`, {
        params: this.getQueryParametersFeaturedPlaylists(limit, offset),
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
