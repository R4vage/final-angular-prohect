import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Subscription, take } from 'rxjs';
import { AlbumItem } from 'src/app/core/models/album.models';
import { AlbumService } from 'src/app/main-page/services/album.service';
import {
  updateSavedItemFailure,
  updateSavedItemSuccess,
} from 'src/app/saved-store/saved-item.actions';
import { SavedItem } from 'src/app/saved-store/saved-item.reducer';
import { selectSavedItemById } from 'src/app/saved-store/saved-item.selectors';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss'],
})
export class AlbumCardComponent implements OnInit, OnDestroy {
  @Input() album!: AlbumItem;
  isSaved!: boolean;
  subscription$: Subscription[] = [];
  loading = false;

  constructor(
    private store: Store<SavedItem>,
    private actions$: Actions,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.subscription$.push(
      this.store
        .select(selectSavedItemById(this.album.id))
        .subscribe(
          (savedItem) => (this.isSaved = savedItem?.isSaved as boolean)
        )
    );
  }

  ngOnDestroy(): void {
    this.subscription$.map((subscription) => subscription.unsubscribe());
  }

  clickStar(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
    if (!this.loading) {
      this.albumService.changeAlbumState(this.album, this.isSaved);
      this.loading = true;
      this.actions$
        .pipe(ofType(updateSavedItemSuccess, updateSavedItemFailure), take(1))
        .subscribe(() => {
          this.loading = false;
        });
    }
  }
}
