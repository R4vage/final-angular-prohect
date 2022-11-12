import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Album, AlbumItem } from 'src/app/core/models/album.models';
import { AlbumState } from 'src/app/main-page/main-page-store/reducers/albums.reducer';
import { selectAlbumById } from 'src/app/main-page/main-page-store/selectors/album.selectors';

@Component({
  selector: 'app-album-detail-page',
  templateUrl: './album-detail-page.component.html',
  styleUrls: ['./album-detail-page.component.scss'],
})
export class AlbumDetailPageComponent implements OnInit {
  album$!: Observable<Album | undefined>;
  subscription!: Subscription;

  idAlbum!: string;

  constructor(private store: Store<AlbumState>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe({
      next: (params) => {
        this.idAlbum = params['id'];
        this.album$ = this.store.pipe(select(selectAlbumById(this.idAlbum))) as Observable<Album>;
      },
    });
    // this.checkSavedAlbum(this.idTrack);
  }

  getImage(album: AlbumItem) {
    return album.images.find((image) => image.height >= 300)?.url;
  }
}
