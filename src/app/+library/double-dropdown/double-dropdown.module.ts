import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoubleDropdownComponent } from './double-dropdown.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { CountryAutocompleteModule } from '../country-autocomplete/country-autocomplete.module';



@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    ReactiveFormsModule,
    CountryAutocompleteModule
  ],
  declarations: [
    DoubleDropdownComponent
  ],
  exports: [
    DoubleDropdownComponent
  ]
})
export class DoubleDropdownModule { }
