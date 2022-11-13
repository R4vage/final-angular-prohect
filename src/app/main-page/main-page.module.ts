import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MaterialModule } from '../material/material.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AlbumsEffects } from './main-page-store/effects/albums.effects';

import * as fromUser from '../user-profile/user-profile-store/reducers/user.reducer';
import * as fromAlbums from './main-page-store/reducers/albums.reducer';
import * as fromPlaylists from './main-page-store/reducers/playlists.reducer';
import * as fromCategory from './main-page-store/reducers/category.reducer';

import { PlaylistsEffects } from './main-page-store/effects/playlists.effects';
import { CategoryEffects } from './main-page-store/effects/category.effects';
import { UserEffects } from '../user-profile/user-profile-store/effects/user.effects';

const REDUCERS = [
  StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
  StoreModule.forFeature(fromAlbums.albumsesFeatureKey, fromAlbums.reducer),
  StoreModule.forFeature(fromPlaylists.playlistsesFeatureKey, fromPlaylists.reducer),
  StoreModule.forFeature(fromCategory.categoriesFeatureKey, fromCategory.reducer),
];

@NgModule({
  declarations: [MainPageComponent, LayoutComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    MaterialModule,
    SharedModule,
    ...REDUCERS,
    EffectsModule.forFeature([UserEffects, AlbumsEffects, PlaylistsEffects, CategoryEffects]),
  ],
})
export class MainPageModule {}
