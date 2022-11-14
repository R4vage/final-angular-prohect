import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumDetailPageRoutingModule } from './album-detail-page-routing.module';
import { AlbumDetailPageComponent } from './components/album-detail-page-component/album-detail-page.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { AlbumTracksComponent } from './components/album-tracks/album-tracks.component';

@NgModule({
  declarations: [AlbumDetailPageComponent, AlbumTracksComponent],
  imports: [CommonModule, AlbumDetailPageRoutingModule, SharedModule, MaterialModule],
})
export class AlbumDetailPageModule {}
