import { ActionReducer, ActionReducerMap, createFeatureSelector, createReducer, createSelector, MetaReducer, on } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { AuthorizationSuccess } from '../../models/authorization.models';
import { loginSuccessful, logOut } from '../auth.actions';

export const authStoreFeatureKey = 'authStore';

export interface AuthState extends AuthorizationSuccess {}

export const initialAuthState: AuthState = {
  access_token: '',
  token_type: '',
  scope: '',
  expire_in: 10,
  refresh_token: '',
};

export const authReducer = createReducer(
  initialAuthState,

  on(loginSuccessful, (state, action) => {
    return { ...action };
  }),

  on(logOut, (state, action) => {
    return { ...initialAuthState };
  })
);

export const metaReducers: MetaReducer<AuthState>[] = !environment.production ? [] : [];
