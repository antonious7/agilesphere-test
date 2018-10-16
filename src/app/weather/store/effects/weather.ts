import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { WeatherService } from '../../weather.service';
import { SearchCitiesAction, WeatherActionType, SearchCitiesActionSuccess, SearchCitiesActionError } from '../actions/weather';


@Injectable()
export class WeatherEffects {

  @Effect()
  searchCity$: Observable<Action> = this.actions$
    .ofType(WeatherActionType.SEARCH_CITIES)
    .pipe(
      switchMap((action: SearchCitiesAction) => {
        const query: string = action.payload;

        return this.weatherService.searchWeatherForCity(query).pipe(
          map((response: any) => new SearchCitiesActionSuccess(response)),
          catchError(() => of(new SearchCitiesActionError('error')))
        );
      })
  );

  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) {}
}
