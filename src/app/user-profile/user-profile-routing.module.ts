import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { TopArtistsResolver } from './resolvers/top-artists.resolver';
import { TopUserTracksResolver } from './resolvers/top-tracks.resolver';

const routes: Routes = [
  {
    path: '',
    component: UserProfileComponent,
    resolve: {
      topArtists: TopArtistsResolver,
      topTracks: TopUserTracksResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserProfileRoutingModule {}
