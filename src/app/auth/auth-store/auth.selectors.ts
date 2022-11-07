import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './reducers';

export const selectAuthState = createFeatureSelector<AuthState>('authStore');

export const isLoggedIn = createSelector(selectAuthState, (auth) => {
  return !!auth.refresh_token;
});

export const isLoggedOut = createSelector(isLoggedIn, (loggedIn) => {
  return !loggedIn;
});
