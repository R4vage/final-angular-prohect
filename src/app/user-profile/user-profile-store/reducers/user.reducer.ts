import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/core/models/user-profile.models';
import * as UserActions from '../actions/user.actions';

export const userFeatureKey = 'user';

export const initialState: User | {} = {};

export const reducer = createReducer(
  initialState,

  on(UserActions.loadUser, (state) => state),
  on(UserActions.loadUsersSuccess, (state, action) => {
    return { ...action.data, userLoaded: true };
  }),
  on(UserActions.loadUsersFailure, (state, action) => {
    throw new Error(action.error);
  })
);
