import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileRestService } from './services/user-profile-rest.service';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileRoutingModule } from './user-profile-routing.module';

import { StoreModule } from '@ngrx/store';
import * as fromTopArtists from './user-profile-store/reducers/top-artists.reducer';
import * as fromTopTracks from './user-profile-store/reducers/top-track.reducer';

import { EffectsModule } from '@ngrx/effects';
import { TopArtistEffects } from './user-profile-store/effects/top-artists.effect';
import { TopTracksEffect } from './user-profile-store/effects/top-tracks.effects';
import { SharedModule } from '../shared/shared.module';
import { CardFlexModule } from '../shared/modules/card-flex/card-flex.module';
import { ProfileComponent } from './components/profile/profile.component';
import { MatIconModule } from '@angular/material/icon';

const Stores = [
  StoreModule.forFeature(
    fromTopArtists.topUserArtistsFeatureKey,
    fromTopArtists.reducer
  ),
  StoreModule.forFeature(
    fromTopTracks.topUserTracksFeatureKey,
    fromTopTracks.reducer
  ),
];

@NgModule({
  declarations: [UserProfileComponent, ProfileComponent],
  imports: [
    CommonModule,
    ...Stores,
    EffectsModule.forFeature([
      TopTracksEffect,
      TopArtistEffects,
     
    ]),
    UserProfileRoutingModule,
    SharedModule,
    CardFlexModule,

    MatIconModule,
  ],
  providers: [UserProfileRestService],
})
export class UserProfileModule {}
