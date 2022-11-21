import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { TracksListModule } from '../shared/modules/tracks-list/tracks-list.module';
import { SharedModule } from '../shared/shared.module';
import { AlbumDetailPageRoutingModule } from './album-detail-page-routing.module';
import { AlbumDetailPageComponent } from './components/album-detail-page-component/album-detail-page.component';

@NgModule({
  declarations: [AlbumDetailPageComponent],
  imports: [
    CommonModule,
    AlbumDetailPageRoutingModule,
    SharedModule,
    MaterialModule,
    TracksListModule,
  ],
})
export class AlbumDetailPageModule {}
