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


  concatenateStrings (ids: string[]): string {
    return ids.join(',')
  }
}
