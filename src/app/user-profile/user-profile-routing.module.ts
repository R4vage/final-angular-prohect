import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserResolver } from './resolvers/user.resolver';

const routes: Routes = [
  {
    path: '',
    component: UserProfileComponent,
    resolve: {
      user: UserResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserProfileRoutingModule {}
