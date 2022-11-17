import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumDetailResolver } from '../album-detail-page/resolvers/album-detail.resolver';
import { CategoryDetailResolver } from '../category-detail-page/resolvers/category-detail.resolver';
import { PlaylistDetailResolver } from '../playlist-detail-page/resolvers/playlist-detail.resolver';
import { TrackDetailResolver } from '../track-detail-page/resolvers/track-detail.resolver';
import { UserResolver } from '../user-profile/resolvers/user.resolver';
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
      {
        path: 'track/:id',
        loadChildren: () =>
          import('../track-detail-page/track-detail-page.module').then(
            (m) => m.TrackDetailPageModule
          ),
        resolve: {
          track: TrackDetailResolver,
        },
      },
      {
        path: 'album/:id',
        loadChildren: () =>
          import('../album-detail-page/album-detail-page.module').then(
            (m) => m.AlbumDetailPageModule
          ),
        resolve: {
          album: AlbumDetailResolver,
        },
      },
      {
        path: 'playlist/:id',
        loadChildren: () =>
          import('../playlist-detail-page/playlist-detail-page.module').then(
            (m) => m.PlaylistDetailPageModule
          ),
        resolve: {
          playlist: PlaylistDetailResolver,
        },
      },
      {
        path: 'category/:id',
        loadChildren: () =>
          import('../category-detail-page/category-detail-page.module').then(
            (m) => m.CategoryDetailPageModule
          ),
        resolve: {
          category: CategoryDetailResolver,
        },
      },

      {
        path: 'profile',
        loadChildren: () =>
          import('../user-profile/user-profile.module').then(
            (m) => m.UserProfileModule
          ),
      },
      {
        path: 'search/:value',
        loadChildren: () =>
          import('../search-page/search-page.module').then(
            (m) => m.SearchPageModule
          ),
      },
      {
        path: 'artist/:id',
        loadChildren: () =>
          import('../artist-page/artist-page.module').then(
            (m) => m.ArtistPageModule
          ),
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
    resolve: {
      user: UserResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
