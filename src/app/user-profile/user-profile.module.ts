import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user-profile-store/effects/user.effects';
import { UserProfileRestService } from './services/user-profile-rest.service';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromUser from './user-profile-store/reducers/user.reducer';
import * as fromTopAlbums from './user-profile-store/reducers/top-albums.reducer';
import * as fromTopArtists from './user-profile-store/reducers/top-artists.reducer';
import * as fromTopTracks from './user-profile-store/reducers/top-track.reducer';



import { TopAlbumsEffects } from './user-profile-store/effects/top-albums.effect';
import { TopArtistEffects } from './user-profile-store/effects/top-artists.effect';
import { TopTracksEffect } from './user-profile-store/effects/top-tracks.effects';

const Stores = [
  StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
  StoreModule.forFeature(fromTopAlbums.topUserAlbumsFeatureKey, fromTopAlbums.reducer),
  StoreModule.forFeature(fromTopArtists.topUserArtistsFeatureKey, fromTopArtists.reducer),
  StoreModule.forFeature(fromTopTracks.topUserTracksFeatureKey, fromTopTracks.reducer)
]

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    ...Stores,
    EffectsModule.forFeature([UserEffects, TopAlbumsEffects, TopArtistEffects, TopTracksEffect]),
    UserProfileRoutingModule,
  ],
  providers: [UserProfileRestService],
})
export class UserProfileModule {}
