import { createFeatureSelector } from '@ngrx/store';


export const selectShowCounter = createFeatureSelector<boolean>('showCounter');