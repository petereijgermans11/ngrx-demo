import { createAction, props } from '@ngrx/store';
import { ICity } from '../../interfaces/city.interface';

const prefix = '[getCities]';

export const getCities = createAction(`${prefix} Get getCities`);
export const getCitiesSuccess = createAction(
    `${getCities.type} Success`,
    props<{
        cities: ICity[];
    }>()
);

export const createCity = createAction(
    `${prefix} Create City`,
    props<{
        city: ICity;
    }>()
);

export const createCitySuccess = createAction(
    `${createCity.type} Success`,
    props<{
        city: ICity;
    }>()
);

export const updateCity = createAction(
    `${prefix} Update City`,
    props<{
        city: ICity;
    }>()
);

export const updateCitySuccess = createAction(
    `${updateCity.type} Success`,
    props<{
        city: ICity;
    }>()
);

export const deleteCity = createAction(
    `${prefix} Delete City`,
    props<{
        city: ICity;
    }>()
);
export const deleteCitySuccess = createAction(
    `${deleteCity.type} Success`,
    props<{
        city: ICity;
    }>()
);
export const setActiveCity = createAction(
    `Set Active City`,
    props<{
        city: ICity;
    }>()
);