import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/core/models/user-profile.models';

export const loadUser = createAction('[User] Load Users');

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ data: User }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);
