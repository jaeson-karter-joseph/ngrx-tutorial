import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, logout, checkLoginStatus } from './auth.actions';
import { tap, map } from 'rxjs/operators';
import { AuthState } from './auth.model';
import { Router } from '@angular/router';


@Injectable()
export class AuthEffects {
    private actions$ = inject(Actions);
    private router = inject(Router);

    login$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(login),
                tap(({ username, password }) => {
                    localStorage.setItem(
                        'auth',
                        JSON.stringify({ username, password, isLoggedIn: true })
                    );
                })
            ),
        { dispatch: false }
    );

    // Clear localStorage on logout
    logout$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(logout),
                tap(() => {
                    localStorage.removeItem('auth');
                })
            ),
        { dispatch: false }
    );

    // On app start, check if user is already logged in
    checkLoginStatus$ = createEffect(() =>
        this.actions$.pipe(
            ofType(checkLoginStatus),
            map(() => {
                const authData = localStorage.getItem('auth');
                if (authData) {
                    const parsed = JSON.parse(authData) as AuthState;
                    return login(parsed); // dispatch login with saved data
                } else {
                    return logout(); 
                }
            })
        )
    );



}
