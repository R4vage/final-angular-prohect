import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from '../material/material.module';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import * as fromAuthStore from './auth-store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth-store/auth.effects';
import { LoginGuard } from '../core/guards/login.guard';

@NgModule({
  declarations: [LoginComponent],
  providers: [LoginGuard],
  imports: [
    CommonModule,
    MaterialModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature(fromAuthStore.authStoreFeatureKey, fromAuthStore.authReducer, { metaReducers: fromAuthStore.metaReducers }),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class AuthModule {}
