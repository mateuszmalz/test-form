import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { CountryDatasource } from './+datasource/country.datasource';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ignoreElements, Observable, Subscription, tap } from 'rxjs';
import { Country } from '../double-dropdown/+data/country';

@Component({
  selector: 'app-country-autocomplete',
  templateUrl: './country-autocomplete.component.html',
  styleUrls: ['./country-autocomplete.component.scss'],
  providers: [
    CountryDatasource,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CountryAutocompleteComponent),
      multi: true
    }
  ]
})
export class CountryAutocompleteComponent implements OnInit, ControlValueAccessor, OnDestroy {

  countryControl = new FormControl<Country | null>(null);
  private sub = Subscription.EMPTY;

  onChange: (value: Country | null) => void = () => {};
  onTouched: () => void = () => {};

  constructor(public ds: CountryDatasource) {
  }

  ngOnInit(): void {
    this.ds.loadCountries();
    this.sub = this.handleValueChange().subscribe();
  }


  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(value: Country | null): void {
    this.countryControl.setValue(value);
  }

  private handleValueChange(): Observable<void> {
    return this.countryControl.valueChanges.pipe(
      tap((value) => {
        this.onChange(value);
      }),
      ignoreElements()
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
