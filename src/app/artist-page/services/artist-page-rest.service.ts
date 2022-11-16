import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArtistPageRestService {
  private readonly url = 'https://api.spotify.com/v1/artist/';

  constructor(private http: HttpClient) {}

  getArtistAlbums(id: string): Observable<any> {
    return this.http.get(this.url + `${id}/albums`);
  }
}
