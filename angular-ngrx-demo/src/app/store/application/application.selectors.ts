import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IApplicationState } from './application.model';

export const selectApplicationState = createFeatureSelector<IApplicationState>('application');
export const selectMode = createSelector(selectApplicationState, (state) => state.mode);
