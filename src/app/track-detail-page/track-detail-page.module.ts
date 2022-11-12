import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackDetailPageRoutingModule } from './track-detail-page-routing.module';
import { TrackDetailPageComponent } from './components/track-detail-page.component';
import { StoreModule } from '@ngrx/store';
import * as fromTracks from './track-detail-store/reducers/tracks.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TrackEffects } from './track-detail-store/effects/track.effects';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TrackDetailPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    TrackDetailPageRoutingModule,
    FormsModule,
    StoreModule.forFeature(fromTracks.tracksesFeatureKey, fromTracks.reducer),
    EffectsModule.forFeature([TrackEffects]),
  ],
})
export class TrackDetailPageModule {}
