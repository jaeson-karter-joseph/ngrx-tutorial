import { ApplicationConfig, provideZoneChangeDetection, isDevMode, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouterStore } from '@ngrx/router-store';
import { counterReducer } from './counter/counter.reducer';
import { toggleReducer } from './toggle/toggle.reducer';
import { authReducer } from './auth/auth.reducer';
import { AuthEffects } from './auth/auth.effects';

export const appConfig: ApplicationConfig = {
  providers:
    [
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(routes),
      provideClientHydration(withEventReplay()),
      provideStore({
        count: counterReducer,
        showCounter: toggleReducer,
        auth: authReducer
      }),
      provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
      provideRouterStore(),
      provideEffects([AuthEffects]),
    ]
};
