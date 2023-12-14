import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICity } from './interfaces/city.interface';
import { select, Store } from '@ngrx/store';
import { getCities, setActiveCity, selectgetCitiesList, selectCityIsLoading, selectActiveCity} from './store/city';
import { setMode, getMode, selectMode } from './store/application';
import { Mode } from './interfaces/Mode';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    cities$: Observable<ICity[]>;
    isLoading$: Observable<boolean>;
    mode$: Observable<Mode>;
    activeCity$:  Observable<ICity>;
    Mode = Mode;

    constructor(private readonly store: Store) {}

    ngOnInit(): void {
        this.initDispatch();
        this.initSubscriptions();
    }

    private initDispatch(): void {
        this.store.dispatch(getCities());
        this.store.dispatch(getMode());
    }

    private initSubscriptions(): void {
        this.cities$ = this.store.pipe(select(selectgetCitiesList));
        this.isLoading$ = this.store.pipe(select(selectCityIsLoading));
        this.mode$ = this.store.pipe(select(selectMode)); 
        this.activeCity$ = this.store.pipe(select(selectActiveCity));
    }


    public modeHandler(mode: Mode) {
        this.store.dispatch(setMode({ mode }));
      }
}
