import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Store } from '@ngrx/store';
import { loginSuccessful } from './auth/auth-store/auth.actions';
import { MainPageComponent } from './main-page/main-page.component';
import { RootState } from './root-store/reducers';

const routes: Routes = [{ path: 'main-page', loadChildren: () => import('./main-page/main-page.module').then((m) => m.MainPageModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
