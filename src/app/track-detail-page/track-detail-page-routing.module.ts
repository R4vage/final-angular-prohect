import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackDetailPageComponent } from './components/track-detail-page.component';

const routes: Routes = [{ path: '', component: TrackDetailPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackDetailPageRoutingModule {}
