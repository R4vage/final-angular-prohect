import { Component, Input, OnInit } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { debounceTime, of, take, timer } from 'rxjs';
import { AlbumItem, TrackItem } from 'src/app/core/models/album.models';
import { Track } from 'src/app/core/models/track.models';
import { updateSavedItemFailure, updateSavedItemSuccess } from 'src/app/saved-store/saved-item.actions';
import { selectSavedItemById} from 'src/app/saved-store/saved-item.selectors';
import { TrackService } from 'src/app/track-detail-page/services/track.service';

@Component({
  selector: 'app-track-item',
  templateUrl: './track-item.component.html',
  styleUrls: ['./track-item.component.scss']
})
export class TrackItemComponent implements OnInit {
  @Input() track!:Track;
  @Input() index!:number;
  @Input() album!: AlbumItem;
  loading = false;
  isSaved: boolean | undefined = false
  constructor(private trackService: TrackService, private store:Store, private actions$: Actions) { }

  ngOnInit(): void {
    this.store.select(selectSavedItemById(this.track.id)).subscribe(
      savedItem => {
        this.isSaved = savedItem?.isSaved}
      )

      if(!this.track.album && this.album) {
        let newTrack:Track = {...this.track, album:this.album};
        this.track = newTrack;
      }
  }

  clickHeart () {
    if (!this.loading && this.isSaved !== undefined) {
      this.trackService.changeSavedTrack(this.track, this.isSaved);
      this.loading = true;
      this.actions$.pipe(
        ofType(updateSavedItemSuccess, updateSavedItemFailure),
        take(1),
      )
      .subscribe(() => {
        this.loading = false;
      });
    }
  }

}
