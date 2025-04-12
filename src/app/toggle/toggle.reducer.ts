 import { createReducer, on } from '@ngrx/store';
 import { toggleVisibility } from './toggle.actions';

export const initialState = true;

export const toggleReducer = createReducer(
    initialState,
    on(toggleVisibility, (state) => !state)
  )