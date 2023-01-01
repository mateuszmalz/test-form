import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Country } from '../+data/country';

@Injectable()
export class CityDatasource {

  getCities(country: Country): Observable<string[]> {
    let cities;

    switch (country) {
      case Country.POLAND:
        cities = ['Warsaw', 'Krakow'];
        break;
      case Country.GERMANY:
        cities = ['Dusseldorf', 'Monachium'];
        break;
      case Country.SPAIN:
        cities = ['Barcelona', 'Madrid'];
        break
    }

    return of(cities).pipe(delay(500));
  }
}
