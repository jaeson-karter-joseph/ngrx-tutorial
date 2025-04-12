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

    



}
