import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Albums } from 'src/app/core/models/album.models';
import { Playlists } from 'src/app/core/models/playlist.models';
import { AlbumService } from '../../services/album.service';
import { PlaylistService } from '../../services/playlist.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  albums$!: Observable<Albums>;
  featuredPlaylists$!: Observable<Playlists>;

  constructor(private albumService: AlbumService, private playlistService: PlaylistService) {}

  ngOnInit(): void {
    this.albums$ = this.albumService.getAlbumReleases();
    this.featuredPlaylists$ = this.playlistService.getFeaturedPlaylists();
  }
}
