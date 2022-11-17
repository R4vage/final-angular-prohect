import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistPageRoutingModule } from './artist-page-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromArtistAlbums from './artist-store/reducers/artist-albums.reducer';
import { ArtistAlbumsEffect } from './artist-store/effects/artistAlbums.effects';
import { EffectsModule } from '@ngrx/effects';
import { ArtistPageRestService } from './services/artist-page-rest.service';
import * as fromArtistDetail from './artist-store/reducers/artist-detail.reducer';
import { ArtistDetailsEffect } from './artist-store/effects/artistDetail.effects';
import { CardFlexModule } from '../shared/modules/card-flex/card-flex.module';
import { ArtistPageComponent } from './artist-page.component';
import { SharedModule } from '../shared/shared.module';
import * as fromArtistTopTrack from './artist-store/reducers/artist-top-track.reducer';
import { ArtistTopTracksEffect } from './artist-store/effects/artistTopTrack.effect';
import * as fromArtistRelatedArtist from './artist-store/reducers/artist-related-artist.reducer';
import { ArtistRelatedArtistsEffect } from './artist-store/effects/artistRelatedArtist.effects';
import { MaterialModule } from '../material/material.module';

const Stores = [
  StoreModule.forFeature(
    fromArtistRelatedArtist.artistRelatedArtistsFeatureKey,
    fromArtistRelatedArtist.reducer
  ),
  StoreModule.forFeature(
    fromArtistAlbums.artistAlbumsesFeatureKey,
    fromArtistAlbums.reducer
  ),
  StoreModule.forFeature(
    fromArtistDetail.artistDetailsFeatureKey,
    fromArtistDetail.reducer
  ),
  StoreModule.forFeature(
    fromArtistTopTrack.artistTopTracksFeatureKey,
    fromArtistTopTrack.reducer
  ),
];

@NgModule({
  declarations: [ArtistPageComponent],
  imports: [
    CommonModule,
    ArtistPageRoutingModule,
    ...Stores,
    EffectsModule.forFeature([
      ArtistAlbumsEffect,
      ArtistDetailsEffect,
      ArtistTopTracksEffect,
      ArtistRelatedArtistsEffect,
    ]),
    CardFlexModule,
    SharedModule,
    MaterialModule,
  ],
  providers: [ArtistPageRestService],
})
export class ArtistPageModule {}
