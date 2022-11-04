import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

const MATERIAL_COMPONENTS = [MatButtonModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...MATERIAL_COMPONENTS],
  exports: [...MATERIAL_COMPONENTS],
})
export class MaterialModule {}
