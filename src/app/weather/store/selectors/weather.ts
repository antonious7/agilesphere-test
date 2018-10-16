import { IWeatherState } from '../reducers/weather';
import { MemoizedSelector, createSelector } from '@ngrx/store';
import { IState } from '../index';
import { Weather } from '../../../model/weather';

export const selectWeather = (state: IState) => state.weather;

export class WeatherSelectors {
  public static search: MemoizedSelector<IState, string> = createSelector(selectWeather,
    (state: IWeatherState) => state.search
  );

  public static cities: MemoizedSelector<IState, Array<Weather>> = createSelector(selectWeather,
    (state: IWeatherState) => state.cities
  );
}
