import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, Observable, Subscription } from 'rxjs';
import { Album, AlbumItem } from 'src/app/core/models/album.models';
import { AlbumState } from 'src/app/main-page/main-page-store/reducers/albums.reducer';
import { selectAlbumById } from 'src/app/main-page/main-page-store/selectors/album.selectors';
import { AlbumService } from 'src/app/main-page/services/album.service';
import { selectSavedItemById } from 'src/app/saved-store/saved-item.selectors';

@Component({
  selector: 'app-album-detail-page',
  templateUrl: './album-detail-page.component.html',
  styleUrls: ['./album-detail-page.component.scss'],
})
export class AlbumDetailPageComponent implements OnInit, OnDestroy {
  album$!: Observable<Album | undefined>;
  subscription!: Subscription;

  idAlbum!: string;

  isAlbumSaved = true;

  constructor(private store: Store, private route: ActivatedRoute, private albumService: AlbumService, private snackbar: MatSnackBar) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe({
      next: (params) => {
        this.idAlbum = params['id'];
        this.album$ = this.store.pipe(select(selectAlbumById(this.idAlbum))) as Observable<Album>;
      },
    });
    this.store.select(selectSavedItemById(this.idAlbum)).subscribe(
      savedItem => {
        return this.isAlbumSaved = savedItem?.isSaved as boolean}
    )
  }

  getImage(album: AlbumItem) {
    return album.images.find((image) => image.height >= 300)?.url;
  }



  saveAlbum(id: string, album: AlbumItem) {
    this.albumService.saveAlbum(id, album)
  }

  deleteAlbum(id: string) {
    this.albumService.deleteAlbum(id)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
