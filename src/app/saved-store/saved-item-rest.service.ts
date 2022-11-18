import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { User } from '../core/models/user-profile.models';
import { selectIdUser } from '../user-profile/user-profile-store/selectors/user.selectors';
import { Kind } from './saved-item.reducer';

@Injectable({
  providedIn: 'root',
})
export class SavedItemRestService implements OnInit{
  URL = 'https://api.spotify.com/v1';
  userId! :string;
  constructor(private http: HttpClient, private store: Store<User>) {}

  ngOnInit(): void {
    this.store.select(selectIdUser).subscribe(
      id => this.userId = id
    )
  }

  checkUserSavedTracks(trackIds: string[]): Observable<boolean[]> {
    return this.http.get<boolean[]>(
      `${this.URL}/me/tracks/contains?ids=${this.concatenateStrings(trackIds)}`
    );
  }

  checkUserSavedAlbums(albumIds: string[]): Observable<boolean[]> {
    return this.http.get<boolean[]>(
      `${this.URL}/me/albums/contains?ids=${this.concatenateStrings(albumIds)}`
    );
  }

  checkUsersFollowedArtists(artistIds: string[]): Observable<boolean[]> {
    return this.http.get<boolean[]>(
      `${this.URL}/me/following/contains?ids=${this.concatenateStrings(
        artistIds
      )}&type=artist`
    );
  }

  checkUsersPlaylist (playlistid: string): Observable<boolean[]> {
    return this.http.get<boolean[]>(`${this.URL}/playlists/${playlistid}/followers/contains?ids=${this.userId}`);
  }

  saveTrack(trackId: string): Observable<void> {
    return this.http.put<void>(`${this.URL}/me/tracks?ids=${trackId}`, '');
  }

  removeTrack(trackId: string): Observable<void> {
    return this.http.delete<void>(`${this.URL}/me/tracks?ids=${trackId}`);
  }

  saveAlbum(albumId: string): Observable<void> {
    return this.http.put<void>(`${this.URL}/me/albums?ids=${albumId}`, '');
  }

  removeAlbum(albumId: string): Observable<void> {
    return this.http.delete<void>(`${this.URL}/me/albums?ids=${albumId}`);
  }

  followPlaylist(playlistId: string): Observable<void> {
    return this.http.put<void>(
      `${this.URL}/playlists/${playlistId}/followers`,'');
  }

  removePlaylist(playlistId: string): Observable<void> {
    return this.http.delete<void>(
      `${this.URL}/playlists/${playlistId}/followers`
    );
  }

  followArtist(artistId: string): Observable<void> {
    return this.http.put<void>(
      `${this.URL}/me/following?type=artist&ids=${artistId}`,
      ''
    );
  }

  unfollowArtist(artistId: string): Observable<void> {
    return this.http.delete<void>(
      `${this.URL}/me/following?type=artist&ids=${artistId}`
    );
  }

  getProperCheckEndpoint ( 
    ids: string[],
    kind:Kind
  ):Observable<boolean[]> {
    switch (kind) {
      case 'album':
        return this.checkUserSavedAlbums(ids);
      case 'artist':
        return this.checkUsersFollowedArtists(ids);
      case 'track':
        return this.checkUserSavedTracks(ids);
      case 'playlist':
        return this.checkUsersPlaylist(ids[0])
    }
  }

  getProperSaveEndpoint(
    id: string,
    kind: Kind,
    isSaved: boolean
  ): Observable<void> {
    switch (kind) {
      case 'album':
        if (isSaved) {
          return this.saveAlbum(id);
        } else {
          return this.removeAlbum(id);
        }
      case 'artist':
        if (isSaved) {
          return this.followArtist(id);
        } else {
          return this.unfollowArtist(id);
        }
      case 'playlist':
        if (isSaved) {
          return this.followPlaylist(id);
        } else {
          return this.removePlaylist(id);
        }
      case 'track':
        if (isSaved) {
          return this.saveTrack(id);
        } else {
          return this.removeTrack(id);
        }
    }
  }

  private concatenateStrings(ids: string[]): string {
    return ids.join(',');
  }
}
