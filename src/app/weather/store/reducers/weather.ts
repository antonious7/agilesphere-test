import { Weather } from '../../../model/weather';

export interface IWeatherState {
    search: string;
    cities: Array<Weather>;
}

export const initialState: IWeatherState = {
    search: null,
    cities: []
};
