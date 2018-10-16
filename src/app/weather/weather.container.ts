import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { IState } from './store/index';
import { SearchCitiesAction } from './store/actions/weather';
import { Observable } from 'rxjs/Observable';
import { Weather } from '../model/weather';
import { WeatherSelectors } from './store/selectors/weather';

@Component({
  selector: 'app-weather',
  template: `
  <app-search
    [value]="search$ | async"
    (onSearch)="citySearch($event)">
  </app-search>
  <app-results [cities]="cities$ | async"></app-results>  `
})
// tslint:disable-next-line:component-class-suffix
export class WeatherContainer implements OnInit {
  public search$: Observable<string>;
  public cities$: Observable<Array<Weather>>;

  constructor(private store: Store<IState>) {}

  citySearch(city: string) {
    this.store.dispatch(new SearchCitiesAction(city));
  }

  public ngOnInit(): void {
    this.search$ = this.store.select<string>(WeatherSelectors.search);
    this.cities$ = this.store.select<Array<Weather>>(WeatherSelectors.cities);
  }

}
