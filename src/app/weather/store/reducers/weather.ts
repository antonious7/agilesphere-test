import { City } from '../../../model/weather';

export interface IWeatherState {
    search: string;
    cities: Array<City>;
}

export const initialState: IWeatherState = {
    search: null,
    cities: []
};
