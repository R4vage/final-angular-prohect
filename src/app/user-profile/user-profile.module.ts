import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user-profile-store/user.effects';
import { UserProfileRestService } from './services/user-profile-rest.service';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [CommonModule, EffectsModule.forFeature([UserEffects])],
  providers: [UserProfileRestService]
})
export class UserProfileModule {}
