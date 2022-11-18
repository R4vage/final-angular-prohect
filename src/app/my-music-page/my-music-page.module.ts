import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMusicPageComponent } from './my-music-page.component';
import { MyMusicPageRoutingModule } from './my-music-page-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromTopAlbums from './store/reducers/top-albums.reducer'
import * as fromSavedTracks from './store/reducers/saved-tracks.reducer'
import { EffectsModule } from '@ngrx/effects';
import { TopAlbumsEffects } from './store/effects/top-albums.effect';
import { CardFlexModule } from '../shared/modules/card-flex/card-flex.module';
import { SavedTracksEffects } from './store/effects/saved-tracks.effects';

const Stores = [
  StoreModule.forFeature(
    fromTopAlbums.topUserAlbumsFeatureKey,
    fromTopAlbums.reducer
  ),
  StoreModule.forFeature(
    fromSavedTracks.savedTracksFeatureKey,
    fromSavedTracks.reducer
  )
]


@NgModule({
  declarations: [
    MyMusicPageComponent
  ],
  imports: [
    CommonModule,
    MyMusicPageRoutingModule,
    Stores,
    EffectsModule.forFeature([TopAlbumsEffects, SavedTracksEffects]),
    CardFlexModule
  ]
})
export class MyMusicPageModule { }
