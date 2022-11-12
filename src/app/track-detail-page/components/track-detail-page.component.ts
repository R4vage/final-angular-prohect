import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, Observable, Subscription, tap } from 'rxjs';
import { Track } from 'src/app/core/models/track.models';
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
  isTrackSaved = true;
  isTrackNotSaved = true;

  isThereAnError = false;
  value = 0;

  constructor(private store: Store, private route: ActivatedRoute, private trackService: TrackService, private snackbar: MatSnackBar) {}

  ngOnInit(): void {
    this.subcription = this.route.params.subscribe({
      next: (params) => {
        this.idTrack = params['id'];
        this.track$ = this.store.pipe(select(selectTrackById(this.idTrack)));
      },
    });
    this.checkSavedTrack(this.idTrack);
  }

  getImage(track: Track) {
    return track.album.images.find((image) => image.height >= 300)?.url;
  }

  checkSavedTrack(id: string) {
    this.trackService
      .checkSavedTrack(id)
      .pipe(map((isTrackSavedArray) => isTrackSavedArray[0]))
      .subscribe({
        next: (isTrackSaved) => {
          this.isTrackSaved = isTrackSaved;
          this.isTrackNotSaved = !isTrackSaved;
        },
        error: () => {
          this.isTrackSaved = true;
          this.isTrackNotSaved = true;
        },
      });
  }

  saveTrack(id: string) {
    this.trackService.saveTrack(id).subscribe({
      next: () => {
        this.snackbar.open('The track has been saved!', 'Close', {
          duration: 2000,
          panelClass: ['bg-emerald-400', 'text-black', 'font-medium'],
        });
      },
    });

    this.isTrackSaved = true;
    this.isTrackNotSaved = false;
  }

  deleteTrack(id: string) {
    this.trackService.deleteTrack(id).subscribe({
      next: () => {
        this.snackbar.open('The track has been deleted!', 'Close', {
          duration: 2000,
          panelClass: ['bg-emerald-400', 'text-black', 'font-medium'],
        });
      },
    });

    this.isTrackSaved = false;
    this.isTrackNotSaved = true;
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
}
