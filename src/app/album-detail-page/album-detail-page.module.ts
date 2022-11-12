import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumDetailPageRoutingModule } from './album-detail-page-routing.module';
import { AlbumDetailPageComponent } from './components/album-detail-page-component/album-detail-page.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [AlbumDetailPageComponent],
  imports: [CommonModule, AlbumDetailPageRoutingModule, SharedModule, MaterialModule],
})
export class AlbumDetailPageModule {}
