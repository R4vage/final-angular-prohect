import { Injectable } from '@angular/core';
import { AuthorizationSuccess, RefreshResponse } from '../models/authorization.models';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  setAccessCode(accessCode: string) {
    localStorage.setItem('accessCode', accessCode);
  }

  setRefreshCode(refreshCode: string) {
    localStorage.setItem('refreshCode', refreshCode);
  }

  setLoginData(loginData: string) {
    localStorage.setItem('login', loginData);
  }

  saveTokens(data: RefreshResponse) {
    this.setAccessCode(data.access_token);
    const loginUpdated: AuthorizationSuccess = {
      ...data,
      refresh_token: this.getRefreshCode(),
    };

    this.setLoginData(JSON.stringify(loginUpdated));
  }

  getAccessCode() {
    return localStorage.getItem('accessCode') || '';
  }

  getRefreshCode() {
    return localStorage.getItem('refresfCode') || '';
  }

  getLoginData(): string {
    return localStorage.getItem('login') || '';
  }

  logOut() {
    localStorage.clear();
  }
}
