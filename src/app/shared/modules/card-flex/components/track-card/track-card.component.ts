import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Subscription, take, timer } from 'rxjs';
import { Track } from 'src/app/core/models/track.models';
import {
  addSavedTrack,
  deleteSavedTrack,
} from 'src/app/my-music-page/store/actions/saved-tracks.actions';
import {
  updateSavedItem,
  updateSavedItemFailure,
  updateSavedItemSuccess,
} from 'src/app/saved-store/saved-item.actions';
import { SavedItem } from 'src/app/saved-store/saved-item.reducer';
import { selectSavedItemById } from 'src/app/saved-store/saved-item.selectors';
import { TrackService } from 'src/app/track-detail-page/services/track.service';

@Component({
  selector: 'app-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.scss'],
})
export class TrackCardComponent implements OnInit {
  @Input() track!: Track;
  @Input() buttons: boolean = false;
  subscription$!: Subscription;
  loading = false;

  isSaved!: boolean;
  constructor(private store: Store<SavedItem>, private actions$: Actions, private trackService:TrackService) {}

  ngOnInit(): void {
    this.subscription$ = this.store
      .select(selectSavedItemById(this.track.id))
      .subscribe((savedItem) => (this.isSaved = savedItem?.isSaved as boolean));
  }


  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  clickStar(event: MouseEvent) {
    event.stopPropagation();
    if (!this.loading) {
      this.trackService.changeSavedTrack(this.track, this.isSaved)
      this.loading = true;
      this.actions$
        .pipe(
          ofType(updateSavedItemSuccess, updateSavedItemFailure), 
          take(1),
        )
        .subscribe(() => {
            this.loading = false;
          },
        );
    }
  }

}
