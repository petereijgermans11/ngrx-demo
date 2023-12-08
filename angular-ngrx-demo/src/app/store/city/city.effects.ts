import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, switchMap } from 'rxjs/operators';

import * as fromCities from './index';
import { CityService } from '../../services/city.service';
import { ICity } from '../../interfaces/city.interface';

@Injectable()
export class CityEffects {
    constructor(private readonly actions$: Actions, private readonly cityService: CityService) {
    }

    getCities$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromCities.getCities.type),
            switchMap(() => this.cityService.getCities()),
            map((cities: ICity[]) => fromCities.getCitiesSuccess({cities}))
        )
    );

    createCity$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromCities.createCity),
            switchMap(({city}) => this.cityService.create(city)),
            map((city: ICity) => fromCities.createCitySuccess({city}))
        )
    );

    updateCity$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromCities.updateCity),
            switchMap(({city}) => this.cityService.update(city)),
            map((city: ICity) => fromCities.updateCitySuccess({city}))
        )
    );

    deleteCity$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromCities.deleteCity),
            switchMap(({city}) => this.cityService.delete(city)),
            map((city: ICity) => fromCities.deleteCitySuccess({city}))
        )
    );
}
