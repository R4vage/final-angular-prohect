import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Track } from 'src/app/core/models/track.models';
import { addSavedTrack, deleteSavedTrack } from 'src/app/my-music-page/store/actions/saved-tracks.actions';
import { updateSavedItem } from 'src/app/saved-store/saved-item.actions';
import { SavedItem } from 'src/app/saved-store/saved-item.reducer';
import { selectSavedItemById } from 'src/app/saved-store/saved-item.selectors';

@Component({
  selector: 'app-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.scss']
})
export class TrackCardComponent implements OnInit {
  @Input() track!: Track
  @Input() buttons: boolean = false;
  @Output() followClicked!: EventEmitter<boolean>;

  isSaved!:boolean;
  constructor(private store:Store<SavedItem>) { }

  ngOnInit(): void {
    this.store.select(selectSavedItemById(this.track.id)).subscribe(
      savedItem => this.isSaved = savedItem?.isSaved as boolean
    )
  }

  changeSaveState (event:MouseEvent) {
    event.stopPropagation();
    if(this.isSaved) {
      this.store.dispatch(deleteSavedTrack({id: this.track.id}))
    } else {
      this.store.dispatch(addSavedTrack({track:this.track}))
    }
    this.store.dispatch(updateSavedItem({id:this.track.id, kind:'track', isSaved:!this.isSaved}))
  }

}
