import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AlbumItem } from '../core/models/album.models';
import { Track } from '../core/models/track.models';
import { selectAllSavedTracks } from './store/selectors/saved-tracks.selectors';
import { selectAllTopAlbums } from './store/selectors/top-albums.selectors';

@Component({
  selector: 'app-my-music-page',
  templateUrl: './my-music-page.component.html',
  styleUrls: ['./my-music-page.component.scss']
})
export class MyMusicPageComponent implements OnInit {
  userAlbums$!: Observable<AlbumItem[]>;
  savedTracks$!: Observable<Track[]>
  constructor(private store:Store) { }

  ngOnInit(): void {
    this.userAlbums$ = this.store.select(selectAllTopAlbums)
    this.savedTracks$ = this.store.select(selectAllSavedTracks)
  }

}
