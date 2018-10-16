import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { WeatherModule } from './weather/weather.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule, ActionReducer } from '@ngrx/store';
import { IState, reducers } from './weather/store';
import { environment } from '../environments/environment';
import { storeLogger } from 'ngrx-store-logger';

export function logger(reducer: ActionReducer<IState>): any {
  return storeLogger()(reducer);
}

export const metaReducers = environment.production ? [] : [logger];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WeatherModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {metaReducers})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
