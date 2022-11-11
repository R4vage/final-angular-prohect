import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/core/models/user-profile.models';
import { UserProfileRestService } from '../../services/user-profile-rest.service';
import { loadTopUserAlbums } from '../../user-profile-store/actions/top-albums.actions';
import { TopUserAlbumsState } from '../../user-profile-store/reducers/top-albums.reducer';
import { selectAllTopAlbums, selectAreTopAlbumsLoaded } from '../../user-profile-store/selectors/top-albums.selectors';
import { selectIsUserLoaded } from '../../user-profile-store/selectors/user.selectors';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private restService: UserProfileRestService, private store: Store<TopUserAlbumsState>, private userStore: Store<User>) { }

  ngOnInit(): void {
/*     this.restService.getUsersTopAlbums().subscribe(res => console.log(res));
    this.restService.getProfile().subscribe(res => console.log(res));
    this.restService.getUsersFollowedArtists().subscribe(res => console.log(res));
    this.restService.getUsersSavedTracks().subscribe(res => console.log(res)); */


  }

}
