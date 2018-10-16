import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';

import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { of } from 'rxjs/observable/of';
import { hot, cold } from 'jasmine-marbles';

import { SearchCitiesAction, WeatherActionType, SearchCitiesActionSuccess, SearchCitiesActionError } from '../actions/weather';
import { WeatherService } from '../../weather.service';
import { WeatherEffects } from './weather';

describe('WeatherEffects', () => {
  let weatherEffects: WeatherEffects;
  let weatherService: jasmine.SpyObj<WeatherService>;
  let actions: any;

  beforeEach(async(() => TestBed.configureTestingModule({
      imports: [
      ],
      providers: [
        WeatherEffects,
        provideMockActions(() => actions),
        {
          provide: WeatherService,
          useValue: jasmine.createSpyObj('WeatherService', ['searchWeatherForCity'])
        }
      ]
    })
  ));

  beforeEach(() => {
    weatherService = TestBed.get(WeatherService);
    weatherEffects = TestBed.get(WeatherEffects);
  });

  describe('searchCity$', () => {

    it('should fire SearchCitySuccessAction on success', () => {
      weatherService.searchWeatherForCity.and.returnValue(of({}));
      const triggerAction: SearchCitiesAction = new SearchCitiesAction('test');
      const expectedAction: SearchCitiesActionSuccess = new SearchCitiesActionSuccess({});

      actions = hot('--a-', { a: triggerAction });
      const expected = cold('--b', { b: expectedAction });

      expect(weatherEffects.searchCity$).toBeObservable(expected);
    });

    it('should fire SearchCityFailureAction on failure', () => {
      weatherService.searchWeatherForCity.and.returnValue(ErrorObservable.create('test'));
      const triggerAction: SearchCitiesAction = new SearchCitiesAction('test');
      const expectedAction: SearchCitiesActionError = new SearchCitiesActionError('error');

      actions = hot('--a-', { a: triggerAction });
      const expected = cold('--b', { b: expectedAction });

      expect(weatherEffects.searchCity$).toBeObservable(expected);
    });
  });
});
