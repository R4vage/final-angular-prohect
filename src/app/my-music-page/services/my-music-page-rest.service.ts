import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAlbumsResponse } from '../../core/models/rest.models';

@Injectable({
  providedIn: 'root',
})
export class MyMusicPageRestService {
  URL = 'https://api.spotify.com/v1';
  constructor(private http: HttpClient) {}

  getUsersTopAlbums(): Observable<UserAlbumsResponse> {
    return this.http.get<UserAlbumsResponse>(`${this.URL}/me/albums`);
  }
}
