import { Weather } from '../../../model/weather';
import { WeatherActions } from '../actions/weather';

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

      default: {
        return state;
      }
    }
  }
