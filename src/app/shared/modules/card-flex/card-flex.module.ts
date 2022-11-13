import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFlexComponent } from './card-flex.component';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TrackCardComponent } from './components/track-card/track-card.component';
import { ArtistCardComponent } from './components/artist-card/artist-card.component';
import { MatIconModule } from '@angular/material/icon';
import { AlbumCardComponent } from './components/album-card/album-card.component';

@NgModule({
  declarations: [
    CardFlexComponent,
    TrackCardComponent,
    ArtistCardComponent,
    AlbumCardComponent
  ],
  imports: [
    CommonModule,

    MatCardModule,
    MatTooltipModule,
    MatIconModule
  ],
  exports:[
    CardFlexComponent,
    TrackCardComponent,
    ArtistCardComponent
  ]
})
export class CardFlexModule { }
