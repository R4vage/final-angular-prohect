import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user-profile-store/user.effects';



@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([UserEffects]),
  ]
})
export class UserProfileModule { }
