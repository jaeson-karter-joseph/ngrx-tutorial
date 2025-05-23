import { createAction, props } from '@ngrx/store';

export const login = createAction(
    '[Auth] Login',
    props<{ username: string; password: string }>()
);

export const logout = createAction('[Auth] Logout');

export const checkLoginStatus = createAction('[Auth] Check Login Status');