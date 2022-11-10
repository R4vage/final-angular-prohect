import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AlbumsResolver } from './resolvers/albums.resolver';
import { CategoriesResolver } from './resolvers/categories.resolver';
import { PlaylistsResolver } from './resolvers/playlists.resolver';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: MainPageComponent,
        resolve: {
          albums: AlbumsResolver,
          playlists: PlaylistsResolver,
          categories: CategoriesResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
