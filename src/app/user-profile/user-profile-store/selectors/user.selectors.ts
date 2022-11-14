import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from 'src/app/core/models/user-profile.models';
import * as fromUser from '../reducers/user.reducer';

export const selectUserState = createFeatureSelector<User>(fromUser.userFeatureKey);

export const selectIsUserLoaded = createSelector(selectUserState, (state) => {
  return state.userLoaded;
});

export const selectIdUser = createSelector(selectUserState, (state) => {
  return state.id;
});
