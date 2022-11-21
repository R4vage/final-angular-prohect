import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription, take } from 'rxjs';
import { Album, AlbumItem } from 'src/app/core/models/album.models';
import { selectAlbumById } from 'src/app/main-page/main-page-store/selectors/album.selectors';
import { AlbumService } from 'src/app/main-page/services/album.service';
import {
  updateSavedItemFailure,
  updateSavedItemSuccess,
} from 'src/app/saved-store/saved-item.actions';
import { selectSavedItemById } from 'src/app/saved-store/saved-item.selectors';

@Component({
  selector: 'app-album-detail-page',
  templateUrl: './album-detail-page.component.html',
  styleUrls: ['./album-detail-page.component.scss'],
})
export class AlbumDetailPageComponent implements OnInit, OnDestroy {
  album$!: Observable<Album | undefined>;
  subscription!: Subscription;
  loading = false;
  idAlbum!: string;
  isAlbumSaved = true;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private actions$: Actions
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe({
      next: (params) => {
        this.idAlbum = params['id'];
        this.album$ = this.store.pipe(
          select(selectAlbumById(this.idAlbum))
        ) as Observable<Album>;
      },
    });
    this.store
      .select(selectSavedItemById(this.idAlbum))
      .subscribe((savedItem) => {
        return (this.isAlbumSaved = savedItem?.isSaved as boolean);
      });
  }

  getImage(album: AlbumItem) {
    return album.images.find((image) => image.height >= 300)?.url;
  }

  clickFollowButton(album: AlbumItem) {
    if (!this.loading && this.isAlbumSaved !== undefined) {
      this.loading = true;
      this.albumService.changeAlbumState(album, this.isAlbumSaved);
      this.actions$
        .pipe(ofType(updateSavedItemSuccess, updateSavedItemFailure), take(1))
        .subscribe(() => {
          this.loading = false;
        });
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
