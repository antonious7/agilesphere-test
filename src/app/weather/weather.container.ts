import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { IState } from './store/index';
import { SearchCitiesAction } from './store/actions/weather';

@Component({
  selector: 'app-weather',
  template: `
  <app-search></app-search>
  <app-results></app-results>  `
})
// tslint:disable-next-line:component-class-suffix
export class WeatherContainer {

  constructor(private store: Store<IState>) {}

  citySearch(city: string) {
    this.store.dispatch(new SearchCitiesAction(city));
  }

}
