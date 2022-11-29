import { Component, OnDestroy, OnInit } from '@angular/core';
import { MySimpleForm } from '../my-simple.form';

@Component({
  selector: 'app-first-name',
  templateUrl: './first-name.component.html',
  styleUrls: ['./first-name.component.scss']
})
export class FirstNameComponent implements OnInit, OnDestroy {

  constructor(public form: MySimpleForm) { }

  ngOnInit(): void {
    this.form.firstName.enable();
  }

  ngOnDestroy(): void {
    this.form.firstName.disable();
  }
}
