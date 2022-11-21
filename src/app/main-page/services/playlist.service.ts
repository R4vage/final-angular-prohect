import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import {
  MainPlaylistResponse,
  Playlist,
} from 'src/app/core/models/playlist.models';
import { updateSavedItem } from 'src/app/saved-store/saved-item.actions';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  readonly URL = 'https://api.spotify.com/v1';

  getPlaylist(playlistId: string, fields?: string) {
    const queryParams = fields
      ? new HttpParams().append('fields', fields)
      : new HttpParams();
    return this.http.get<Playlist>(`${this.URL}/playlists/${playlistId}`, {
      params: queryParams,
    });
  }

  changePlayStoreState(playlistId: string, saveState: boolean) {
    this.store.dispatch(
      updateSavedItem({ id: playlistId, kind: 'playlist', isSaved: !saveState })
    );
    if (saveState) {
      this.snackbar.open('The playlist has been unfollowed!', 'Close', {
        duration: 2000,
        panelClass: ['bg-emerald-400', 'text-black', 'font-medium'],
      });
    } else {
      this.snackbar.open('The playlist has been followed!', 'Close', {
        duration: 2000,
        panelClass: ['bg-emerald-400', 'text-black', 'font-medium'],
      });
    }
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
