import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user-profile.models';


@Injectable({
  providedIn: 'any'
})
export class UserProfileRestService {
  URL = 'https://api.spotify.com/v1'
  constructor(private http: HttpClient) { }

  getProfile():Observable<User>{
    return this.http.get<User>(`${this.URL}/me`, {
      params: {
        'Content-Type': 'application/json'
      }
    })
  }

}
