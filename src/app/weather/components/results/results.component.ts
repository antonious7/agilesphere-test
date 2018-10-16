import { Component, OnChanges, Input, OnInit, SimpleChanges } from '@angular/core';
import { City } from '../../../model/weather';
import * as moment from 'moment';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent implements OnChanges {
  @Input() cities: Array<City>;
  private timeIntervals = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes.cities.currentValue.length) {
      this.timeIntervals[0] = moment(this.cities[0].list[0].dt_txt).format('h A');
      this.timeIntervals[1] = moment(this.cities[0].list[2].dt_txt).format('h A');
      this.timeIntervals[2] = moment(this.cities[0].list[4].dt_txt).format('h A');
      this.timeIntervals[3] = moment(this.cities[0].list[6].dt_txt).format('h A');
    }
  }

}


