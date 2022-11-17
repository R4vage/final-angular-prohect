import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AlbumItem } from '../core/models/album.models';
import { selectAllTopAlbums } from './store/selectors/top-albums.selectors';

@Component({
  selector: 'app-my-music-page',
  templateUrl: './my-music-page.component.html',
  styleUrls: ['./my-music-page.component.scss']
})
export class MyMusicPageComponent implements OnInit {
  userAlbums$!: Observable<AlbumItem[]>
  constructor(private store:Store<AlbumItem>) { }

  ngOnInit(): void {
    this.userAlbums$ = this.store.select(selectAllTopAlbums)
  }

}
