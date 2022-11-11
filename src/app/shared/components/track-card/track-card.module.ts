import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackCardComponent } from './track-card.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    TrackCardComponent
  ],
  imports: [
    CommonModule,

    MatCardModule
  ],
  exports: [
    TrackCardComponent
  ]
})
export class TrackCardModule { }
