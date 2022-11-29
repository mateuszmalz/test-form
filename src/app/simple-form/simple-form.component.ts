import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MySimpleForm } from './my-simple.form';
import { SimpleFormValue } from './+model/simple-form.value';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss'],
  providers: [
    MySimpleForm
  ]
})
export class SimpleFormComponent implements OnInit {

  @Output()
  formSubmitted = new EventEmitter<SimpleFormValue>();

  constructor(public form: MySimpleForm) {
  }

  ngOnInit(): void {

  }

  handleSubmit() {
    if (!this.form.$ref.valid) {
      return;
    }
    this.formSubmitted.emit(this.form.getValue());
    console.log(this.form.getValue());
  }
}
