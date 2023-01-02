import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CityDatasource } from './+datasource/city.datasource';
import { MySimpleForm } from '../../simple-form/my-simple.form';

@Component({
  selector: 'app-double-dropdown',
  templateUrl: './double-dropdown.component.html',
  styleUrls: ['./double-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    CityDatasource,
  ]
})
export class DoubleDropdownComponent implements OnInit {

  constructor(public form: MySimpleForm) {
  }

  ngOnInit(): void {
  }
}
