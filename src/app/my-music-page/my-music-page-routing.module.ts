import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyMusicPageComponent } from './my-music-page.component';
import { SavedTracksResolver } from './resolvers/saved-tracks.resolver';
import { TopUserAlbumsResolver } from './resolvers/top-album.resolver';

const routes: Routes = [
  {
    path: '',
    component: MyMusicPageComponent,
    resolve: {
      topAlbums: TopUserAlbumsResolver,
      savedTracks: SavedTracksResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyMusicPageRoutingModule {}
