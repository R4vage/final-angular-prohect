import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { map, Observable, Subscription, take } from 'rxjs';
import { Track } from 'src/app/core/models/track.models';
import { updateSavedItemFailure, updateSavedItemSuccess } from 'src/app/saved-store/saved-item.actions';
import { selectSavedItemById } from 'src/app/saved-store/saved-item.selectors';
import { TrackService } from '../services/track.service';
import { selectTrackById } from '../track-detail-store/selectors/track.selectors';

@Component({
  selector: 'app-track-detail-page',
  templateUrl: './track-detail-page.component.html',
  styleUrls: ['./track-detail-page.component.scss'],
})
export class TrackDetailPageComponent implements OnInit, OnDestroy {
  track$!: Observable<Track | undefined>;
  subcription!: Subscription;
  idTrack!: string;
  isSaved!:boolean | undefined;
  isThereAnError = false;
  value = 0;
  loading = false;

  constructor(private store: Store, private route: ActivatedRoute, private trackService: TrackService, private actions$:Actions) {}

  ngOnInit(): void {
    this.subcription = this.route.params.subscribe({
      next: (params) => {
        this.idTrack = params['id'];
        this.track$ = this.store.pipe(select(selectTrackById(this.idTrack)));
      },
    });
    this.store.select(selectSavedItemById(this.idTrack)).subscribe(savedItem => {
      this.isSaved = savedItem?.isSaved;
    })
  }

  getImage(track: Track) {
    return track.album.images.find((image) => image.height >= 300)?.url;
  }

  clickFollowButton (track:Track) {
    if (!this.loading && this.isSaved !== undefined) {
      this.loading = true;
      this.trackService.changeSavedTrack(track, this.isSaved);
      this.actions$.pipe(
        ofType(updateSavedItemSuccess, updateSavedItemFailure),
        take(1)
      )
      .subscribe(() => {
        this.loading = false;
      });
    }
  }


  saveTrack(track: Track) {
    this.trackService.saveTrackStore(track)

  }

  deleteTrack(id: string) {
    this.trackService.deleteTrackStore(id)

  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
}
