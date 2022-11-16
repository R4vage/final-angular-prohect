import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../core/models/user-profile.models';

@Injectable({
  providedIn: 'root'
})
export class SavedItemRestService {
  URL = 'https://api.spotify.com/v1'
  constructor(private http: HttpClient) { }

  checkUserSavedTracks (trackIds:string[]):Observable<boolean[]>{
    return this.http.get<boolean[]>(`${this.URL}/me/tracks/contains?ids=${this.concatenateStrings(trackIds)}`)
  }

  checkUserSavedAlbums (albumIds: string[]):Observable<boolean[]> {
    return this.http.get<boolean[]>(`${this.URL}/me/albums/contains?ids=${this.concatenateStrings(albumIds)}`)
  }

  checkUsersFollowedArtists (artistIds: string[]):Observable<boolean[]> {
    return this.http.get<boolean[]>(`${this.URL}/me/following/contains?ids=${this.concatenateStrings(artistIds)}&type=artist`)
  }

  saveTrack (trackId:string):Observable<void> {
    return this.http.put<void>(`${this.URL}/me/tracks?ids=${trackId}`,'')
  }

  removeTrack (trackId:string):Observable<void> {
    return this.http.delete<void>(`${this.URL}/me/tracks?ids=${trackId}`)
  }

  saveAlbum (albumId:string):Observable<void> {
    return this.http.put<void>(`${this.URL}/me/albums?ids=${albumId}`,'')
  }

  removeAlbum (albumId:string):Observable<void> {
    return this.http.delete<void>(`${this.URL}/me/albums?ids=${albumId}`)
  }

  followPlaylist (playlistId:string):Observable<void> {
    return this.http.put<void>(`${this.URL}/me/playlists/${playlistId}/followers`,{"public":true})
  }

  removePlaylist (playlistId:string):Observable<void> {
    return this.http.delete<void>(`${this.URL}/me/playlists/${playlistId}/followers`)
  }

  followArtist (artistId:string):Observable<void> {
    return this.http.put<void>(`${this.URL}/me/following?type=artist&ids=${artistId}`,'')
  }

  unfollowArtist (artistId:string):Observable<void> {
    return this.http.delete<void>(`${this.URL}/me/following?type=artist&ids=${artistId}`)
  }

  concatenateStrings (ids: string[]): string {
    return ids.join(',')
  }
}
