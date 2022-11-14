import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailPageComponent } from './components/category-detail-page.component';

const routes: Routes = [{ path: '', component: CategoryDetailPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryDetailPageRoutingModule {}
