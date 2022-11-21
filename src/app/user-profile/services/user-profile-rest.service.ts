import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAlbumsResponse, UserTopArtistsResponse, UserTopTracksResponse } from 'src/app/core/models/rest.models';
import { User } from 'src/app/core/models/user-profile.models';


@Injectable({
  providedIn: 'any'
})
export class UserProfileRestService {
  URL = 'https://api.spotify.com/v1'

  constructor(private http: HttpClient) { }

  getProfile():Observable<User>{
    return this.http.get<User>(`${this.URL}/me`)
  }

  getUsersTopArtists():Observable<UserTopArtistsResponse> {
    return this.http.get<UserTopArtistsResponse>(`${this.URL}/me/top/artists?time_range=medium_term&limit=10`)
  }

  getUsersTopTracks():Observable<UserTopTracksResponse> {
    return this.http.get<UserTopTracksResponse>(`${this.URL}/me/top/tracks?time_range=medium_term&limit=10`)
  }
}
