import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap, throwError } from 'rxjs';
import { Track } from 'src/app/core/models/track.models';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  readonly URL = 'https://api.spotify.com/v1';

  getTrack(trackId: string): Observable<Track> {
    return this.http.get<Track>(`${this.URL}/tracks/${trackId}`);
  }

  checkSavedTrack(trackId: string) {
    const queryParams = new HttpParams().append('ids', trackId);

    return this.http.get<boolean[]>(`${this.URL}/me/tracks/contains`, {
      params: queryParams,
    });
  }

  saveTrack(trackId: string) {
    const queryParams = new HttpParams().append('ids', trackId);

    return this.checkSavedTrack(trackId).pipe(
      switchMap((isTrackSaved) => {
        if (!isTrackSaved[0]) {
          return this.http.put(`${this.URL}/me/tracks`, { ids: [trackId] }, { params: queryParams });
        }
        return throwError(() => Error('The track is already saved'));
      })
    );
  }

  deleteTrack(trackId: string) {
    const queryParams = new HttpParams().append('ids', trackId);

    return this.checkSavedTrack(trackId).pipe(
      switchMap((isTrackSaved) => {
        if (isTrackSaved[0]) {
          return this.http.delete(`${this.URL}/me/tracks`, { params: queryParams });
        }
        return throwError(() => Error("The track doesn't exist"));
      })
    );
  }

  constructor(private http: HttpClient) {}
}
