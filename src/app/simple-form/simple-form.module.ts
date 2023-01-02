import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleFormComponent } from './simple-form.component';
import { FirstNameComponent } from './first-name/first-name.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LastNameComponent } from './last-name/last-name.component';
import { DoubleDropdownModule } from '../+library/double-dropdown/double-dropdown.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DoubleDropdownModule
  ],
  declarations: [
    SimpleFormComponent,
    FirstNameComponent,
    LastNameComponent
  ],
  exports: [
    SimpleFormComponent
  ]
})
export class SimpleFormModule {}
