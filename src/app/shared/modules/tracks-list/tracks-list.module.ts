import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TracksListComponent } from './tracks-list.component';
import { TrackItemComponent } from './components/track-item/track-item.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [TracksListComponent, TrackItemComponent],
  imports: [CommonModule, RouterModule, SharedModule, MatIconModule],
  exports: [TracksListComponent],
})
export class TracksListModule {}
