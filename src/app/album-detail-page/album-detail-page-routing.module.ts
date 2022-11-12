import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumDetailPageComponent } from './components/album-detail-page-component/album-detail-page.component';

const routes: Routes = [{ path: '', component: AlbumDetailPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumDetailPageRoutingModule {}
