import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { from, map, throwError } from 'rxjs';
import { AuthorizationSuccess, RefreshResponse } from '../../core/models/authorization.models';
import { EncriptionService } from './encription.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly CLIENT_ID = '1a742ee646b74af4a2a648a825f35326';
  private readonly SECRET_ID = '21a60243753a4a1a8f01eb6f7649c3b7';
  readonly URL = 'https://accounts.spotify.com';
  private readonly REDIRECT_URL = 'http://localhost:4200/auth';
  private readonly SCOPES = `user-read-email user-read-private user-read-playback-state user-modify-playback-state user-read-currently-playing playlist-modify-private playlist-read-private playlist-read-collaborative playlist-modify-public user-library-modify user-library-read user-follow-read user-top-read`;
  private readonly CODE_VERIFIER = 'HbryEbLfum7OUMF5HfrKvCT06M53tPZ5KcPKj-mmBiihdkaF2XF_mhjuwCLj.XOBahhLxndp32LQ3X1LPW.hY2AKOeIqKq2IJ.ENjVR_PlvTDbzWZ_5zRkGa';
  readonly STATE = 'Cs5Jm6qjtreXI4IL';

  constructor(private http: HttpClient, private encrypt: EncriptionService) {}

  getAuthorizationUser() {
    return from(this.encrypt.generateCodeChallenge(this.CODE_VERIFIER)).pipe(
      map((codeChallenge) => {
        const url = new URL(`${this.URL}/authorize`);
        const params = this.getQueryParametersAuthUser(this.CLIENT_ID, this.REDIRECT_URL, this.STATE, this.SCOPES, codeChallenge);
        params.keys().forEach((param) => {
          url.searchParams.set(param, params.get(param) as string);
        });
        return url;
      })
    );
  }

  getQueryParametersAuthUser(clientId: string, redirectURL: string, state: string, scopes: string, codeChallenge: string) {
    return new HttpParams().appendAll({
      client_id: clientId,
      response_type: 'code',
      redirect_uri: redirectURL,
      state,
      scope: scopes,
      code_challenge_method: 'S256',
      code_challenge: codeChallenge,
    });
  }

  getAccessToken(code: string, state: string) {
    if (state !== this.STATE) {
      return throwError(() => new Error('Something wrong happened, please try again'));
    }
    const dataBody = {
      grant_type: 'authorization_code',
      code,
      redirect_uri: this.REDIRECT_URL,
      client_id: this.CLIENT_ID,
      code_verifier: this.CODE_VERIFIER,
    };
    const bodyRequest = new HttpParams().appendAll(dataBody).toString();
    return this.http.post<AuthorizationSuccess>(`${this.URL}/api/token`, bodyRequest, {
      headers: this.getHeaderAccessToken(this.CLIENT_ID, this.SECRET_ID),
    });
  }

  getHeaderAccessToken(clientId: string, secretId: string) {
    return new HttpHeaders({
      'Authorization': `Basic ${this.encrypt.encodeString(`${clientId}:${secretId}`)}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    });
  }

  refreshToken(refreshToken: string) {
    const client_id = this.CLIENT_ID;
    const dataBody = {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id,
    };
    const bodyRequest = new HttpParams().appendAll(dataBody).toString().replace(' ', '');
    return this.http.post<RefreshResponse>(`${this.URL}/api/token`, bodyRequest, {
      headers: this.getHeaderRefreshToken(this.CLIENT_ID, this.SECRET_ID),
    });
  }

  getHeaderRefreshToken(clientId: string, secretId: string) {
    return new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
  }
}
