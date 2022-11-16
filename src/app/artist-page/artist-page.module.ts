import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistPageRoutingModule } from './artist-page-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromArtistAlbums from './artist-store/reducers/artist-albums.reducer';
import { ArtistAlbumsEffect } from './artist-store/effects/artistAlbums.effects';
import { EffectsModule } from '@ngrx/effects';
import { ArtistPageRestService } from './services/artist-page-rest.service';
import * as fromArtistDetail from './artist-store/reducers/artist-detail.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ArtistPageRoutingModule,
    StoreModule.forFeature(
      fromArtistAlbums.artistAlbumsesFeatureKey,
      fromArtistAlbums.reducer
    ),
    EffectsModule.forFeature([ArtistAlbumsEffect]),
    StoreModule.forFeature(
      fromArtistDetail.artistDetailsFeatureKey,
      fromArtistDetail.reducer
    ),
  ],
  providers: [ArtistPageRestService],
})
export class ArtistPageModule {}
