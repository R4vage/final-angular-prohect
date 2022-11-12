import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Artist } from 'src/app/core/models/album.models';
import { Track } from 'src/app/core/models/track.models';
import { User } from 'src/app/core/models/user-profile.models';
import { selectAllTopArtists } from '../../user-profile-store/selectors/top-artists.selectors';
import { selectAllTopTracks } from '../../user-profile-store/selectors/top-tracks.selectors';
import { selectUserState } from '../../user-profile-store/selectors/user.selectors';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  topUserArtists$!: Observable<Artist[]>;
  topUserTracks$!: Observable<Track[]>
  user$!: Observable<User>

  constructor( private store: Store) { }

  ngOnInit(): void {
    this.topUserArtists$ = this.store.select(selectAllTopArtists);
    this.topUserTracks$ = this.store.select(selectAllTopTracks);
    this.user$ = this.store.select(selectUserState);
    this.user$.subscribe(next=>console.log(next))
  }

}
