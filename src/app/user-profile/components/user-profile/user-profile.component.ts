import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Artist } from 'src/app/core/models/album.models';
import { Track } from 'src/app/core/models/track.models';
import { selectAllTopArtists } from '../../user-profile-store/selectors/top-artists.selectors';
import { selectAllTopTracks } from '../../user-profile-store/selectors/top-tracks.selectors';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  topUserArtists$!: Observable<Artist[]>;
  topUserTracks$!: Observable<Track[]>


  constructor( private store: Store) { }

  ngOnInit(): void {
    this.topUserArtists$ = this.store.select(selectAllTopArtists);
    this.topUserTracks$ = this.store.select(selectAllTopTracks);
    this.topUserTracks$.subscribe(track => {console.log(track)})

  }

}
