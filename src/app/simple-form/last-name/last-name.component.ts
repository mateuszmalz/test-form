import { Component, OnInit } from '@angular/core';
import { MySimpleForm } from '../my-simple.form';

@Component({
  selector: 'app-last-name',
  templateUrl: './last-name.component.html',
  styleUrls: ['./last-name.component.scss']
})
export class LastNameComponent implements OnInit {

  constructor(public form: MySimpleForm) {
  }

  ngOnInit(): void {
    this.form.lastName.enable();
  }

  ngOnDestroy(): void {
    this.form.lastName.disable();
  }
}
