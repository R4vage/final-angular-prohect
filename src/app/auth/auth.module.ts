import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LoginGuard } from '../core/guards/login.guard';
import { MaterialModule } from '../material/material.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthEffects } from './auth-store/auth.effects';
import * as fromAuthStore from './auth-store/reducers';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [LoginComponent],
  providers: [LoginGuard],
  imports: [
    CommonModule,
    MaterialModule,
    AuthRoutingModule,
    HttpClientModule,
    StoreModule.forFeature(fromAuthStore.authStoreFeatureKey, fromAuthStore.authReducer, { metaReducers: fromAuthStore.metaReducers }),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class AuthModule {}
