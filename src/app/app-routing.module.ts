import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginGuard } from './core/guards/login.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'auth',
    component: LoginComponent,
    canActivate: [LoginGuard],
  },
  {
    path: '',
    loadChildren: () => import('./main-page/main-page.module').then((m) => m.MainPageModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'profile',
    loadChildren: () => import('./user-profile/user-profile.module').then((m) => m.UserProfileModule),
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
