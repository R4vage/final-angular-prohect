import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ArtistAlbums,
  ArtistDetails,
  ArtistRelatedArtists,
  ArtistTopTracks,
} from 'src/app/core/models/artist.models';
import { Track } from 'src/app/core/models/track.models';

@Injectable()
export class ArtistPageRestService {
  private readonly url = 'https://api.spotify.com/v1/artists/';

  constructor(private http: HttpClient) {}

  getArtistDetails(id: string): Observable<ArtistDetails> {
    return this.http.get<ArtistDetails>(this.url + id);
  }

  getArtistAlbums(id: string): Observable<ArtistAlbums> {
    return this.http.get<ArtistAlbums>(
      this.url + `${id}/albums?include_groups=album,single`
    );
  }

  getArtistTopTracks(id: string): Observable<ArtistTopTracks> {
    return this.http.get<ArtistTopTracks>(
      this.url + `${id}/top-tracks?market=US`
    );
  }

  getArtistRelatedArtists(id: string): Observable<ArtistRelatedArtists> {
    return this.http.get<ArtistRelatedArtists>(
      this.url + `${id}/related-artists`
    );
  }
}
