import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CityStoreModule } from './store/city/city-store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { AddbuttonComponent } from './components/addbutton/addbutton.component';
import { ApplicationStoreModule } from './store/application/application.module';
import { AddCityFormComponent } from './components/add-city-form/add-city-form.component';
import { NotificationComponent } from './components/notification/notification.component';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot(),
        EffectsModule.forRoot(),
        StoreDevtoolsModule.instrument(),
        CityStoreModule,
        ApplicationStoreModule,
        CommonModule,
        ListComponent,
        ShowcaseComponent,
        AddbuttonComponent,
        AddCityFormComponent,
        NotificationComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
