import { Action } from '@ngrx/store';
import { Action } from 'rxjs/scheduler/Action';

export enum WeatherActionType {
    SEARCH_CITIES = '[Weather] search cities',
    SEARCH_CITIES_SUCCESS = '[Weather] search cities success',
    SEARCH_CITIES_ERROR = '[Weather] search cities error'
}

export class SearchCitiesAction implements Action {
    readonly type = WeatherActionType.SEARCH_CITIES;
    constructor(public payload: string) {}
}

export class SearchCitiesActionSuccess implements Action {
    readonly type = WeatherActionType.SEARCH_CITIES_SUCCESS;
    constructor(public payload: string) {}
}

export class SearchCitiesActionError implements Action {
    readonly type = WeatherActionType.SEARCH_CITIES_ERROR;
    constructor(public payload: string) {}
}

export type WeatherAction =
    SearchCitiesAction |
    SearchCitiesActionSuccess |
    SearchCitiesActionError;
