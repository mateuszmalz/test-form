import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CountryDatasource } from './+datasource/country.datasource';
import { CityDatasource } from './+datasource/city.datasource';

@Component({
  selector: 'app-double-dropdown',
  templateUrl: './double-dropdown.component.html',
  styleUrls: ['./double-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoubleDropdownComponent implements OnInit {

  constructor(public countryDS: CountryDatasource,
              public cityDS: CityDatasource) {
  }

  ngOnInit(): void {
  }

}
