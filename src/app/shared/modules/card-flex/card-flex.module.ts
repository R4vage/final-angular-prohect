import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFlexComponent } from './card-flex.component';



@NgModule({
  declarations: [
    CardFlexComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardFlexComponent
  ]
})
export class CardFlexModule { }
