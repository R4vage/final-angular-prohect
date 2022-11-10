import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user-profile-store/user.effects';
import { UserProfileRestService } from './services/user-profile-rest.service';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromUser from './user-profile-store/user.reducer'

@NgModule({
  declarations: [UserProfileComponent],
  imports: [CommonModule, StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),EffectsModule.forFeature([UserEffects]), UserProfileRoutingModule],
  providers: [UserProfileRestService]
})
export class UserProfileModule {}
