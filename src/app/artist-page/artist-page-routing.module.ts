import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistPageComponent } from './artist-page.component';
import { ArtistAlbumsResolver } from './resolver/artist-album.resolver';

const routes: Routes = [
  {
    path: '',
    component: ArtistPageComponent,
    resolve: {
      artistAlbums: ArtistAlbumsResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistPageRoutingModule {}
