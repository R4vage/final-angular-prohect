import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtistAlbums } from '../artist-albums.model';

@Injectable({
  providedIn: 'root',
})
export class ArtistPageRestService {
  private readonly url = 'https://api.spotify.com/v1/artist/';

  constructor(private http: HttpClient) {}

  getArtistAlbums(id: string): Observable<ArtistAlbums> {
    return this.http.get<ArtistAlbums>(
      this.url + `${id}/albums?include_groups=album,single`
    );
  }
}
