import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtistAlbums, ArtistDetails } from 'src/app/core/models/artist.models';

@Injectable()
export class ArtistPageRestService {
  private readonly url = 'https://api.spotify.com/v1/artists/';

  constructor(private http: HttpClient) {}

  getArtistDetails(id: string): Observable<ArtistDetails> {
    return this.http.get<ArtistDetails>(this.url + `${id}`);
  }

  getArtistAlbums(id: string): Observable<ArtistAlbums> {
    return this.http.get<ArtistAlbums>(
      this.url + `${id}/albums?include_groups=album,single`
    );
  }
}
