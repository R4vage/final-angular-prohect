import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Albums } from 'src/app/core/models/album.models';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  albums$!: Observable<Albums>;

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albums$ = this.albumService.getAlbumReleases();
  }
}
