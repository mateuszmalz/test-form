import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Country } from '../+data/country';

@Injectable()
export class CityDatasource {

  private cities = new BehaviorSubject<string[]>([]);
  cities$: Observable<string[]> = this.cities;

  loadCities(country: Country): void {
    switch (country) {
      case Country.POLAND:
        this.cities.next(['Warsaw', 'Krakow']);
        break;
      case Country.GERMANY:
        this.cities.next(['Dusseldorf', 'Monachium']);
        break;
      case Country.SPAIN:
        this.cities.next(['Barcelona', 'Madrid']);
        break
    }
  }
}
