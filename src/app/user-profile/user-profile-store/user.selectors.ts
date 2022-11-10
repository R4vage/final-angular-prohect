import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from 'src/app/core/models/user-profile.models';
import * as fromUser from './user.reducer';

export const selectUserState = createFeatureSelector<User>(
  fromUser.userFeatureKey
);

export const selectIsUserLoaded = createSelector(selectUserState, (state) => {
  return state.userLoaded
});
