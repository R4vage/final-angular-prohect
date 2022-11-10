import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserProfileModule } from '../user-profile.module';

@Injectable({
  providedIn: 'any'
})
export class UserProfileRestService {
  URL = 'https://api.spotify.com/v1'
  constructor(private http: HttpClient) { }

  getProfile(){
    this.http.get(`${this.URL}/me`, {
      params: {
        'Content-Type': 'application/json'
      }
    }).subscribe({
      next: (res) => {console.log(res)}
    })
  }

}
