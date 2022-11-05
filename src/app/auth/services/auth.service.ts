import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { HtmlParser } from '@angular/compiler';
import { Injectable } from '@angular/core';

import { from, map, mergeMap, Observable, of, tap } from 'rxjs';
import { EncriptionService } from './encription.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly CLIENT_ID = '1a742ee646b74af4a2a648a825f35326';
  private readonly URL = 'https://accounts.spotify.com/authorize';
  private readonly REDIRECT_URL = 'http://localhost:4200/auth';
  private readonly SCOPES = `user-read-email user-read-private user-read-playback-state user-modify-playback-state user-read-currently-playing playlist-modify-private`;
  private readonly CODE_VERIFIER = 'HbryEbLfum7OUMF5HfrKvCT06M53tPZ5KcPKj-mmBiihdkaF2XF_mhjuwCLj.XOBahhLxndp32LQ3X1LPW.hY2AKOeIqKq2IJ.ENjVR_PlvTDbzWZ_5zRkGa';
  private readonly STATE = this.encrypt.getRandomString(16);
  private CODE_CHALLENGE!: string;

  constructor(private http: HttpClient, private encrypt: EncriptionService) {}

  getAuthorizationUser() {
    return from(this.encrypt.generateCodeChallenge(this.CODE_VERIFIER)).pipe(
      map((codeChallenge) => {
        this.CODE_CHALLENGE = codeChallenge;
        const url = new URL(this.URL);
        const params = this.getQueryParameters(this.CLIENT_ID, this.REDIRECT_URL, this.STATE, this.SCOPES, codeChallenge);
        params.keys().forEach((param) => {
          url.searchParams.set(param, params.get(param) as string);
        });
        return url;
      })
    );
  }

  getQueryParameters(clientId: string, redirectURL: string, state: string, scopes: string, codeChallenge: string) {
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
}
