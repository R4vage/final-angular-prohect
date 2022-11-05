import { Injectable } from '@angular/core';
import { encode as base64encode } from 'base64-arraybuffer';

@Injectable({
  providedIn: 'root',
})
export class EncriptionService {
  constructor() {}

  getRandomString(sizeString: number, withSpecialChar = false): string {
    let randomCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    if (withSpecialChar) {
      randomCharacters = `${randomCharacters}_.-`;
    }
    let result = '';
    for (let i = 0; i < sizeString; i++) {
      result += randomCharacters.charAt(Math.floor(Math.random() * randomCharacters.length));
    }
    return result;
  }

  async generateCodeChallenge(codeVerifier: string): Promise<string> {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    const base64Digest = base64encode(digest);
    return base64Digest.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
  }

  encodeString(str: string) {
    const data = new TextEncoder().encode(str);
    return base64encode(data);
  }
}
