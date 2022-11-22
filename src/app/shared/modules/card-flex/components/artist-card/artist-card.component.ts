import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Subscription, take } from 'rxjs';
import { Artist } from 'src/app/core/models/album.models';
import {
  updateSavedItem,
  updateSavedItemFailure,
  updateSavedItemSuccess,
} from 'src/app/saved-store/saved-item.actions';
import { SavedItem } from 'src/app/saved-store/saved-item.reducer';
import { selectSavedItemById } from 'src/app/saved-store/saved-item.selectors';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss'],
})
export class ArtistCardComponent implements OnInit, OnDestroy {
  @Input() artist!: Artist;
  subscription$: Subscription[] = [];
  isSaved!: boolean;
  loading = false;

  constructor(private store: Store<SavedItem>, private actions$: Actions) {}

  ngOnInit(): void {
    this.subscription$.push(
      this.store
        .select(selectSavedItemById(this.artist.id))
        .subscribe(
          (savedItem) => (this.isSaved = savedItem?.isSaved as boolean)
        )
    );
  }

  ngOnDestroy(): void {
    this.subscription$.map((subscription) => subscription.unsubscribe());
  }

  clickStar(event: MouseEvent) {
    event.stopImmediatePropagation();
    if (!this.loading) {
      this.changeArtistSaveState();
      this.loading = true;
      this.actions$
        .pipe(ofType(updateSavedItemSuccess, updateSavedItemFailure), take(1))
        .subscribe(() => {
          this.loading = false;
        });
    }
  }

  changeArtistSaveState() {
    this.store.dispatch(
      updateSavedItem({
        id: this.artist.id,
        kind: 'artist',
        isSaved: !this.isSaved,
      })
    );
  }
}
