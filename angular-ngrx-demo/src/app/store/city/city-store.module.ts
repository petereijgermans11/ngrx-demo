import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CityEffects } from './city.effects';
import { cityReducer } from './city.reducers';

@NgModule({
    imports: [
        StoreModule.forFeature('city', cityReducer),
        EffectsModule.forFeature([CityEffects])
    ]
})
export class CityStoreModule {}
