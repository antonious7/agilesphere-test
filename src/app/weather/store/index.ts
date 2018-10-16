import { reducer as WeatherReducer, IWeatherState } from './reducers/weather';
import { ActionReducerMap } from '@ngrx/store';

export interface IState {
    weather: IWeatherState;
}

export const reducers: ActionReducerMap<IState> = {
    weather: WeatherReducer
};
