import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, Observable, Subscription } from 'rxjs';
import { Track } from 'src/app/core/models/track.models';
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

  constructor(private store: Store, private route: ActivatedRoute, private trackService: TrackService, private snackbar: MatSnackBar) {}

  ngOnInit(): void {
    this.subcription = this.route.params.subscribe({
      next: (params) => {
        this.idTrack = params['id'];
        this.track$ = this.store.pipe(select(selectTrackById(this.idTrack)));
      },
    });
    this.store.select(selectSavedItemById(this.idTrack)).subscribe(savedItem => {
      this.isSaved = savedItem?.isSaved;
      console.log(this.isSaved)
    })
  }

  getImage(track: Track) {
    return track.album.images.find((image) => image.height >= 300)?.url;
  }



  saveTrack(track: Track) {
    this.trackService.saveTrackStore(track)
    this.snackbar.open('The track has been saved!', 'Close', {
        duration: 2000,
        panelClass: ['bg-emerald-400', 'text-black', 'font-medium'],
    });
  }

  deleteTrack(id: string) {
    this.trackService.deleteTrackStore(id)
    this.snackbar.open('The track has been deleted!', 'Close', {
      duration: 2000,
      panelClass: ['bg-emerald-400', 'text-black', 'font-medium'],
    });
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
}
