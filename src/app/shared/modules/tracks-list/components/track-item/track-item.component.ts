import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TrackItem } from 'src/app/core/models/album.models';
import { Track } from 'src/app/core/models/track.models';
import { selectSavedItemById, selectSavedItemsState } from 'src/app/saved-store/saved-item.selectors';
import { TrackService } from 'src/app/track-detail-page/services/track.service';

@Component({
  selector: 'app-album-track',
  templateUrl: './track-item.component.html',
  styleUrls: ['./track-item.component.scss']
})
export class TrackItemComponent implements OnInit {
  @Input() track!:Track;
  @Input() index!:number;
  isSaved: boolean | undefined = false
  constructor(private trackService: TrackService, private store:Store) { }

  ngOnInit(): void {
    this.store.select(selectSavedItemById(this.track.id)).subscribe(
      savedItem => {
        this.isSaved = savedItem?.isSaved}
      )
  }

  saveTrack () {
    this.trackService.saveTrackStore(this.track)
  }

  deleteTrack () {
    this.trackService.deleteTrackStore(this.track.id)
  }



}
