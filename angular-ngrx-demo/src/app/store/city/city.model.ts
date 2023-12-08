import { ICity } from '../../interfaces/city.interface';

export interface ICityState {
    cities: ICity[];
    activeCity: ICity | null;
    isLoading: boolean;
}
