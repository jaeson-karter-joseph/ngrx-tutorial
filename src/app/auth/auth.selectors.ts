import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.model';

export const selectAuthState = createFeatureSelector<AuthState>('auth');


export const selectUsername = createSelector(
    selectAuthState,
    (state: AuthState) => state.username
);
export const selectPassword = createSelector(
    selectAuthState,
    (state: AuthState) => state.password
);
export const selectIsLoggedIn = createSelector(
    selectAuthState,
    (state: AuthState) => state.isLoggedIn
);