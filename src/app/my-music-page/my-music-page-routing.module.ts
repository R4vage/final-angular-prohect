import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyMusicPageComponent } from './my-music-page.component';
import { TopUserAlbumsResolver } from './store/resolvers/top-album.resolver';


const routes: Routes = [
  {
    path: '',
    component: MyMusicPageComponent,
    resolve: {
      topAlbums: TopUserAlbumsResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyMusicPageRoutingModule {}
