import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-descendant',
  templateUrl: './form-descendant.component.html',
  styleUrls: ['./form-descendant.component.css']
})
export class FormDescendantComponent implements OnInit {
  @Input() parentForm: FormGroup | AbstractControl;

  constructor() {}

  ngOnInit(): void {}
}
