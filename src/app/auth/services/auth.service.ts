import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  CLIENT_ID = '1a742ee646b74af4a2a648a825f35326';
  URL = 'https://accounts.spotify.com/authorize';
  REDIRECT_URL = 'http://localhost:4200';
  SCOPES = `user-read-email user-read-private user-read-playback-state user-modify-playback-state user-read-currently-playing playlist-modify-private`;
  constructor(private http: HttpClient) {}

  getAuthorizationUser() {
    const queryParameters = new HttpParams().appendAll({
      client_id: this.CLIENT_ID,
      response_type: 'code',
      redirect_uri: this.REDIRECT_URL,
      state: (() => {
        const randomCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < 16; i++) {
          result += randomCharacters.charAt(Math.floor(Math.random() * randomCharacters.length));
        }
        return result;
      })(),
      scope: this.SCOPES,
      code_challenge_method: 'S256',
    });
  }

  getRandomString(withSpecialChar: boolean): string {
    let randomCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    if (withSpecialChar) {
      randomCharacters = `${randomCharacters}_.-`;
    }
    let result = '';
    for (let i = 0; i < 16; i++) {
      result += randomCharacters.charAt(Math.floor(Math.random() * randomCharacters.length));
    }
    return result;
  }
}
