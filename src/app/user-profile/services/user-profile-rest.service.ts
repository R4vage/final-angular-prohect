import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumItem } from 'src/app/core/models/album.models';
import { UserAlbumsResponse, UserArtistsResponse, UserTracksResponse } from 'src/app/core/models/rest.models';
import { User } from 'src/app/core/models/user-profile.models';


@Injectable({
  providedIn: 'any'
})
export class UserProfileRestService {
  URL = 'https://api.spotify.com/v1'
  options = {
    params:{
      'Content-Type': 'application/json'
    }
  }
  constructor(private http: HttpClient) { }

  getProfile():Observable<User>{
    return this.http.get<User>(`${this.URL}/me`, this.options)
  }

  getUsersTopAlbums(): Observable<UserAlbumsResponse>{
    return this.http.get<UserAlbumsResponse>(`${this.URL}/me/albums`, this.options)
  }

  getUsersFollowedArtists():Observable<UserArtistsResponse> {
    return this.http.get<UserArtistsResponse>(`${this.URL}/me/following?type=artist`)
  }

  getUsersSavedTracks():Observable<UserTracksResponse> {
    return this.http.get<UserTracksResponse>(`${this.URL}/me/tracks`)
  }
}
