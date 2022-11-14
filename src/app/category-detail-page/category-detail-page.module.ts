import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryDetailPageRoutingModule } from './category-detail-page-routing.module';
import { CategoryDetailPageComponent } from './components/category-detail-page.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CategoryDetailPageComponent],
  imports: [CommonModule, CategoryDetailPageRoutingModule, MaterialModule, SharedModule],
})
export class CategoryDetailPageModule {}
