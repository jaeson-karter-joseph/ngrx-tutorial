import { createReducer, on } from '@ngrx/store';
import { checkLoginStatus, login, logout } from './auth.actions';
import { AuthState } from './auth.model';


export const initialState: AuthState = {
    username: '',
    password: '',
    isLoggedIn: false
};

export const authReducer = createReducer(
    initialState,
    on(login, (state, { username, password }) => ({
        ...state,
        username,
        password,
        isLoggedIn: true
    })),
    on(logout, () => initialState)
);