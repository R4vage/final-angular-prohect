import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, Observable, Subscription } from 'rxjs';
import { Album, AlbumItem } from 'src/app/core/models/album.models';
import { AlbumState } from 'src/app/main-page/main-page-store/reducers/albums.reducer';
import { selectAlbumById } from 'src/app/main-page/main-page-store/selectors/album.selectors';
import { AlbumService } from 'src/app/main-page/services/album.service';

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
  isAlbumNotSaved = true;

  constructor(private store: Store<AlbumState>, private route: ActivatedRoute, private albumService: AlbumService, private snackbar: MatSnackBar) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe({
      next: (params) => {
        this.idAlbum = params['id'];
        this.album$ = this.store.pipe(select(selectAlbumById(this.idAlbum))) as Observable<Album>;
      },
    });
    this.checkSavedAlbum(this.idAlbum);
  }

  getImage(album: AlbumItem) {
    return album.images.find((image) => image.height >= 300)?.url;
  }

  checkSavedAlbum(id: string) {
    this.albumService
      .checkSavedAlbum(id)
      .pipe(map((isAlbumSavedArray) => isAlbumSavedArray[0]))
      .subscribe({
        next: (isAlbumSaved) => {
          this.isAlbumSaved = isAlbumSaved;
          this.isAlbumNotSaved = !isAlbumSaved;
        },
        error: () => {
          this.isAlbumSaved = true;
          this.isAlbumNotSaved = true;
        },
      });
  }

  saveAlbum(id: string) {
    this.albumService.saveAlbum(id).subscribe({
      next: () => {
        this.snackbar.open('The album has been saved!', 'Close', {
          duration: 2000,
          panelClass: ['bg-emerald-400', 'text-black', 'font-medium'],
        });
      },
    });

    this.isAlbumSaved = true;
    this.isAlbumNotSaved = false;
  }

  deleteAlbum(id: string) {
    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.snackbar.open('The album has been deleted!', 'Close', {
          duration: 2000,
          panelClass: ['bg-emerald-400', 'text-black', 'font-medium'],
        });
      },
    });

    this.isAlbumSaved = false;
    this.isAlbumNotSaved = true;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
