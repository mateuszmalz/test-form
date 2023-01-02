import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, Subject, tap } from 'rxjs';
import { Country } from '../../double-dropdown/+data/country';

@Injectable()
export class CountryDatasource {

  private countries = new BehaviorSubject<Country[]>([]);
  countries$: Observable<Country[]> = this.countries;

  loadCountries(): void {
    this.countries.next([Country.POLAND, Country.GERMANY, Country.SPAIN]);
  }
}
