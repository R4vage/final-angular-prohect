import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMusicPageComponent } from './my-music-page.component';
import { MyMusicPageRoutingModule } from './my-music-page-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromTopAlbums from './store/reducers/top-albums.reducer'
import { EffectsModule } from '@ngrx/effects';
import { TopAlbumsEffects } from './store/effects/top-albums.effect';



@NgModule({
  declarations: [
    MyMusicPageComponent
  ],
  imports: [
    CommonModule,
    MyMusicPageRoutingModule,
    StoreModule.forFeature(
      fromTopAlbums.topUserAlbumsFeatureKey,
      fromTopAlbums.reducer
    ),
    EffectsModule.forFeature([TopAlbumsEffects])
  ]
})
export class MyMusicPageModule { }
