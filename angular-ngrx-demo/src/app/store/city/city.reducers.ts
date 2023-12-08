import { Action, createReducer, on } from '@ngrx/store';

import { ICityState } from './city.model';
import * as fromgetCities from './index';

export const initialCityState: ICityState = {
    cities: [],
    activeCity: null,
    isLoading: false
};

const reducer = createReducer<ICityState>(
    initialCityState,
    on(fromgetCities.getCities, (state) => {
        return {
            ...state,
            isLoading: true
        };
    }),
    on(fromgetCities.getCitiesSuccess, (state, { cities }) => {
        return {
            ...state,
            isLoading: false,
            cities
        };
    }),
    on(fromgetCities.createCity, (state) => {
        return {
            ...state,
            isLoading: true,
        };
    }),
    on(fromgetCities.createCitySuccess, (state, { city }) => {
        return {
            ...state,
            cities: [...state.cities, city],
            isLoading: false,
        };
    }),
    on(fromgetCities.updateCity, (state) => {
        return {
            ...state,
            isLoading: true,
        };
    }),
    on(fromgetCities.updateCitySuccess, (state, { city }) => {
        return {
            ...state,
            cities: state.cities.map((b) => b.id === city.id ? city : b),
            isLoading: false,
        };
    }),
    on(fromgetCities.deleteCity, (state) => {
        return {
            ...state,
            isLoading: true,
        };
    }),
    on(fromgetCities.deleteCitySuccess, (state, { city }) => {
        return {
            ...state,
            isLoading: false,
            cities: state.cities.filter((b) => b.id !== city.id)
        };
    }),
    on(fromgetCities.setActiveCity, (state, { city }) => {
        return { ...state, activeCity: city };
    })

);

export function cityReducer(state = initialCityState, actions: Action): ICityState {
    return reducer(state, actions);
}
