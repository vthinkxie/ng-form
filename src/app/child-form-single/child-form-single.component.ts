import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child-form-single',
  templateUrl: './child-form-single.component.html',
  styleUrls: ['./child-form-single.component.css']
})
export class ChildFormSingleComponent implements OnInit {
  @Input() parentForm: FormGroup | AbstractControl;
  constructor() {}

  ngOnInit(): void {}
}
