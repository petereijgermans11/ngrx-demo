import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ICityState } from './city.model';

export const selectCityState = createFeatureSelector<ICityState>('city');
export const selectgetCitiesList = createSelector(selectCityState, (state) => state.cities);
export const selectActiveCity = createSelector(selectCityState, (state) => state.activeCity);
export const selectCityIsLoading = createSelector(selectCityState, (state) => state.isLoading);
