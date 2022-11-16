import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistPageRoutingModule } from './artist-page-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromArtistAlbums from './artist-store/reducers/artist-albums.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ArtistPageRoutingModule,
    StoreModule.forFeature(
      fromArtistAlbums.artistAlbumsesFeatureKey,
      fromArtistAlbums.reducer
    ),
  ],
})
export class ArtistPageModule {}
