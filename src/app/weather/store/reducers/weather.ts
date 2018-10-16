import { Weather } from '../../../model/weather';
import { WeatherActions, WeatherActionType } from '../actions/weather';

export interface IWeatherState {
    search: string;
    cities: Array<Weather>;
}

export const initialState: IWeatherState = {
    search: null,
    cities: []
};

export function reducer(state = initialState, action: WeatherActions): IWeatherState {

    switch (action.type) {
        case WeatherActionType.SEARCH_CITIES_SUCCESS: {
            return {
              search: null,
              cities: [
                ...state.cities,
                action.payload
              ]
            };
          }

        default: {
            return state;
        }
    }
  }
