import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Observable, switchMap, throwError } from 'rxjs';
import { Track } from 'src/app/core/models/track.models';
import { addSavedTrack, deleteSavedTrack } from 'src/app/my-music-page/store/actions/saved-tracks.actions';
import { updateSavedItem } from 'src/app/saved-store/saved-item.actions';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  readonly URL = 'https://api.spotify.com/v1';

  getTrack(trackId: string): Observable<Track> {
    return this.http.get<Track>(`${this.URL}/tracks/${trackId}`);
  }

  checkSavedTrack (trackId: string) {
    const queryParams = new HttpParams().append('ids', trackId);
    return this.http.get<boolean[]>(`${this.URL}/me/tracks/contains`, {
      params: queryParams,
    });
  }

  saveTrack (trackId: string) {
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

  changeSavedTrack (track:Track, isSaved:boolean) {
    if (isSaved) {
      this.deleteTrackStore(track.id);
      this.snackbar.open('The track has been deleted!', 'Close', {
        duration: 2000,
        panelClass: ['bg-emerald-400', 'text-black', 'font-medium'],
    });
    } else {
      this.saveTrackStore(track);
      this.snackbar.open('The track has been saved!', 'Close', {
        duration: 2000,
        panelClass: ['bg-emerald-400', 'text-black', 'font-medium'],
      });
    }
  }

  saveTrackStore (track:Track) {
    this.store.dispatch(addSavedTrack({track:track}))
    this.store.dispatch(updateSavedItem({id:track.id, kind:'track', isSaved:true}))
  }

  deleteTrackStore (trackId:string) {
    this.store.dispatch(deleteSavedTrack({id:trackId}));
    this.store.dispatch(updateSavedItem({id:trackId, kind:'track', isSaved:false}))
  }

  deleteTrack (trackId: string) {
    const queryParams = new HttpParams().append('ids', trackId);
    return this.checkSavedTrack(trackId).pipe(
      switchMap((isTrackSaved) => {
        if (isTrackSaved[0]) {
          return this.http.delete(`${this.URL}/me/tracks`, { params: queryParams });
        }
        return throwError(() => Error("The track wasn't in the User's Saved Tracks"));
      })
    );
  }

  constructor(private http: HttpClient, private store: Store, private snackbar: MatSnackBar) {}
}
