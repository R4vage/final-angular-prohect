import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistCardComponent } from './artist-card.component';
import { MatCardModule } from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip'



@NgModule({
  declarations: [
    ArtistCardComponent
  ],
  imports: [
    CommonModule,

    MatCardModule,
    MatTooltipModule
  ],
  exports:[
    ArtistCardComponent
  ]
})
export class ArtistCardModule { }
