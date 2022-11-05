import { Injectable } from '@angular/core';

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

  // setUserInformation(){

  // }
}
