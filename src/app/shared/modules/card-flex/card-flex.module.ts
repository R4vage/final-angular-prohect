import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFlexComponent } from './card-flex.component';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TrackCardComponent } from './components/track-card/track-card.component';
import { ArtistCardComponent } from './components/artist-card/artist-card.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    CardFlexComponent,
    TrackCardComponent,
    ArtistCardComponent
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
