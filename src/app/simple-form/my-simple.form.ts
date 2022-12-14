import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Gender } from './+model/gender';
import { SimpleFormValue } from './+model/simple-form.value';
import { Country } from '../+library/double-dropdown/+data/country';

@Injectable()
export class MySimpleForm {

  private form: any | null;

  readonly $ref: FormGroup;
  readonly firstName: FormControl<string>;
  readonly lastName: FormControl<string>;
  readonly gender: FormControl<Gender>;
  readonly place: FormControl<Country>;

  constructor() {
    const form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      gender: new FormControl(Gender.MALE, Validators.required),
      place: new FormControl('', Validators.required),
    });

    form.disable();

    this.$ref = form;
    this.firstName = form.get('firstName') as FormControl;
    this.lastName = form.get('lastName') as FormControl;
    this.gender = form.get('gender') as FormControl;
    this.place = form.get('place') as FormControl;
  }

  getValue(): SimpleFormValue {
    return {
      firstName: this.firstName.value === this.form?.firstName ? null : this.firstName.value,
      lastName: this.lastName.value === this.form?.lastName ? null : this.lastName.value,
      gender: this.gender.value === this.form?.gender ? null : this.gender.value,
      place: this.gender.value === this.form?.place ? null : this.place.value,
    }
  }

  setValue(values: any): void {
    this.form = values;

    this.firstName.setValue(values.firstname);
    this.lastName.setValue(values.lastName);
    this.gender.setValue(values.gender);
  }
}
