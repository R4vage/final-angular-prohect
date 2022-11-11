import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackCardComponent } from './track-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [
    TrackCardComponent
  ],
  imports: [
    CommonModule,

    MatCardModule,
    MatTooltipModule
  ],
  exports: [
    TrackCardComponent
  ]
})
export class TrackCardModule { }
