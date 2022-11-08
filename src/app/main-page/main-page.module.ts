import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [MainPageComponent, LayoutComponent],
  imports: [CommonModule, MainPageRoutingModule, MaterialModule, SharedModule],
})
export class MainPageModule {}
