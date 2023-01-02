import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryAutocompleteComponent } from './country-autocomplete.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  declarations: [
    CountryAutocompleteComponent
  ],
  exports: [
    CountryAutocompleteComponent
  ]
})
export class CountryAutocompleteModule { }
