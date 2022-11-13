import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page.component';
import { SearchRestService } from './services/search-rest.service';
import { CardFlexModule } from '../shared/modules/card-flex/card-flex.module';
import { SearchPageRoutingModule } from './search-page.routing';



@NgModule({
  declarations: [
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    SearchPageRoutingModule,

    CardFlexModule
  ],
  providers:[
    SearchRestService
  ]
})
export class SearchPageModule { }
