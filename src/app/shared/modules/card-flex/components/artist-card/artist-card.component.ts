import { Component, Input, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Artist } from 'src/app/core/models/album.models';
import { updateSavedItem } from 'src/app/saved-store/saved-item.actions';
import { SavedItem } from 'src/app/saved-store/saved-item.reducer';
import { selectSavedItemById } from 'src/app/saved-store/saved-item.selectors';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent implements OnInit, OnDestroy {
  @Input() artist!: Artist;
  @Output() followClicked = new EventEmitter<boolean>;
  subscription$!: Subscription;
  isSaved!:boolean;

  constructor(private store:Store<SavedItem>) { }

  ngOnInit(): void {
    this.subscription$ = this.store.select(selectSavedItemById(this.artist.id)).subscribe(
      savedItem => this.isSaved = savedItem?.isSaved as boolean
    )
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe()
  }
  changeSaveState (event:MouseEvent) {
    event.stopPropagation();
    this.followClicked.emit(!this.isSaved);
    this.store.dispatch(updateSavedItem({id:this.artist.id, kind:'artist', isSaved:!this.isSaved}))
  }

}
