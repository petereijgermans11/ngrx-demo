import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

//import { CityEffects } from './application.effects';
import { applicationReducer } from './application.reducers';

@NgModule({
    imports: [
        StoreModule.forFeature('application', applicationReducer),
        //EffectsModule.forFeature([CityEffects])
    ]
})
export class ApplicationStoreModule {}
