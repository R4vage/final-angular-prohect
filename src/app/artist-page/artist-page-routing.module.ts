import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistPageComponent } from './artist-page.component';
import { ArtistAlbumsResolver } from './resolver/artist-album.resolver';
import { ArtistDetailsResolver } from './resolver/artist-detail.resolver';
import { ArtistRelatedArtistsResolver } from './resolver/artist-related-artist.resolver';
import { ArtistTopTracksResolver } from './resolver/artist-top-track.resolver';

const routes: Routes = [
  {
    path: '',
    component: ArtistPageComponent,
    resolve: {
      artistAlbums: ArtistAlbumsResolver,
      artistDetails: ArtistDetailsResolver,
      artistTopTracks: ArtistTopTracksResolver,
      artistRelatedArtists: ArtistRelatedArtistsResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistPageRoutingModule {}
