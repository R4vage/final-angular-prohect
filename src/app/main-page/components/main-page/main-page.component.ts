import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AlbumItem } from 'src/app/core/models/album.models';
import { CategoryItem } from 'src/app/core/models/categories.models';
import { PlaylistItem } from 'src/app/core/models/playlist.models';
import { selectAllAlbums } from '../../main-page-store/selectors/album.selectors';
import { selectAllCategories } from '../../main-page-store/selectors/category.selectors';
import { selectAllPlaylists } from '../../main-page-store/selectors/playlist.selectors';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  albums$!: Observable<AlbumItem[]>;
  featuredPlaylists$!: Observable<PlaylistItem[]>;
  availableCategories$!: Observable<CategoryItem[]>;

  limitList = 5;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.albums$ = this.store.pipe(select(selectAllAlbums));
    this.featuredPlaylists$ = this.store.pipe(select(selectAllPlaylists));
    this.availableCategories$ = this.store.pipe(select(selectAllCategories));
  }
}
