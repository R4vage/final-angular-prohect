import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistDetailPageComponent } from './components/playlist-detail-page/playlist-detail-page.component';

const routes: Routes = [{ path: '', component: PlaylistDetailPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaylistDetailPageRoutingModule {}
