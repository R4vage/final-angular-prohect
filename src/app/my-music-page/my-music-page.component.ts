import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumItem } from '../core/models/album.models';

@Component({
  selector: 'app-my-music-page',
  templateUrl: './my-music-page.component.html',
  styleUrls: ['./my-music-page.component.scss']
})
export class MyMusicPageComponent implements OnInit {
  userAlbums$!: Observable<AlbumItem[]>
  constructor() { }

  ngOnInit(): void {
  }

}
