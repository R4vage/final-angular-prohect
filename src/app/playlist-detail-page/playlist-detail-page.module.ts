import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistDetailPageRoutingModule } from './playlist-detail-page-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PlaylistDetailPageComponent } from './components/playlist-detail-page/playlist-detail-page.component';
import { MaterialModule } from '../material/material.module';
import { PlaylistTracksComponent } from './components/playlist-tracks/playlist-tracks.component';
import { TracksListModule } from '../shared/modules/tracks-list/tracks-list.module';

@NgModule({
  declarations: [PlaylistDetailPageComponent, PlaylistTracksComponent],
  imports: [CommonModule, SharedModule, PlaylistDetailPageRoutingModule, SharedModule, MaterialModule, TracksListModule],
})
export class PlaylistDetailPageModule {}
