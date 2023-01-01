import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Country } from '../+data/country';

@Injectable()
export class CountryDatasource {

  getCountries(): Observable<Country[]> {
    return of([Country.POLAND, Country.GERMANY, Country.SPAIN]).pipe(delay(500));
  }
}
