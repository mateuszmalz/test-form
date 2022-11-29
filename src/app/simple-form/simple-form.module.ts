import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleFormComponent } from './simple-form.component';
import { FirstNameComponent } from './first-name/first-name.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LastNameComponent } from './last-name/last-name.component';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
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
export class SimpleFormModule { }
