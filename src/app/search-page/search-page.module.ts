import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page.component';
import { SearchRestService } from './services/search-rest.service';
import { CardFlexModule } from '../shared/modules/card-flex/card-flex.module';
import { SearchPageRoutingModule } from './search-page.routing';
import { StoreModule } from '@ngrx/store';
import * as fromSearches from './search-store/search.reducer'
import { EffectsModule } from '@ngrx/effects';
import { SearchesEffects } from './search-store/search.effects';



@NgModule({
  declarations: [
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    SearchPageRoutingModule,
    StoreModule.forFeature(fromSearches.searchesFeatureKey, fromSearches.reducer),
    EffectsModule.forFeature([SearchesEffects]),
    CardFlexModule
  ],
  providers:[
    SearchRestService
  ]
})
export class SearchPageModule { }
