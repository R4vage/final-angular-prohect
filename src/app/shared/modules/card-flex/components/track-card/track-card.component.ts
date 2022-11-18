import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { debounceTime, fromEvent, Subscription } from 'rxjs';
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
  @ViewChild('star', { static: true }) star!: ElementRef;
  subscription$: Subscription[] = []



  isSaved!:boolean;
  constructor(private store:Store<SavedItem>) { }

  ngOnInit(): void {
    this.store.select(selectSavedItemById(this.track.id)).subscribe(
      savedItem => this.isSaved = savedItem?.isSaved as boolean
    )
  }

  ngAfterViewInit(): void {
    console.log(this.star.nativeElement)
    this.subscription$.push(
      fromEvent(this.star.nativeElement, 'click')
      .pipe( debounceTime(1000))
      .subscribe((event) => {
        this.changeSaveState()
      })
    )
  }

  ngOnDestroy(): void {
    this.subscription$.map((subscription)=> subscription.unsubscribe())
  }

  changeSaveState () {
    if(this.isSaved) {
      this.store.dispatch(deleteSavedTrack({id: this.track.id}))
    } else {
      this.store.dispatch(addSavedTrack({track:this.track}))
    }
    this.store.dispatch(updateSavedItem({id:this.track.id, kind:'track', isSaved:!this.isSaved}))
  }

}
