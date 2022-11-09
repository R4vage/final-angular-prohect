import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Albums } from 'src/app/core/models/album.models';
import { Categories } from 'src/app/core/models/categories.models';
import { Playlists } from 'src/app/core/models/playlist.models';
import { AlbumService } from '../../services/album.service';
import { CategoriesService } from '../../services/categories.service';
import { PlaylistService } from '../../services/playlist.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  albums$!: Observable<Albums>;
  featuredPlaylists$!: Observable<Playlists>;
  availableCategories$!: Observable<Categories>;

  limitList = 5;

  constructor(private albumService: AlbumService, private playlistService: PlaylistService, private availableCategories: CategoriesService) {}

  ngOnInit(): void {
    this.albums$ = this.albumService.getAlbumReleases(this.limitList);
    this.featuredPlaylists$ = this.playlistService.getFeaturedPlaylists(this.limitList);
    this.availableCategories$ = this.availableCategories.getFeaturedPlaylists(this.limitList);
  }
}
