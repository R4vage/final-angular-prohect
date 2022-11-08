import { Injectable } from '@angular/core';
import { AuthorizationSuccess, RefreshResponse } from '../../core/models/authorization.models';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  setAccessCode(accessCode: string) {
    localStorage.setItem('accessToken', accessCode);
  }

  setRefreshCode(refreshCode: string) {
    localStorage.setItem('refreshToken', refreshCode);
  }

  setLoginData(loginData: string) {
    localStorage.setItem('login', loginData);
  }

  saveTokens(data: RefreshResponse) {
    this.setAccessCode(data.access_token);
    this.setRefreshCode(data.refresh_token);
    const loginUpdated: AuthorizationSuccess = {
      ...data,
    };

    this.setLoginData(JSON.stringify(loginUpdated));
  }

  getAccessCode() {
    return localStorage.getItem('accessToken') || '';
  }

  getRefreshCode() {
    return localStorage.getItem('refreshToken') || '';
  }

  getLoginData(): string {
    return localStorage.getItem('login') || '';
  }

  logOut() {
    localStorage.clear();
  }
}
