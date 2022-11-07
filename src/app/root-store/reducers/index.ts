import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { authReducer } from 'src/app/auth/auth-store/reducers';
import { environment } from '../../../environments/environment';

export interface RootState {}

export const reducers: ActionReducerMap<RootState> = {};

export const metaReducers: MetaReducer<RootState>[] = !environment.production ? [] : [];
