import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child-form-family',
  templateUrl: './child-form-family.component.html',
  styleUrls: ['./child-form-family.component.css']
})
export class ChildFormFamilyComponent implements OnInit {
  @Input() parentForm: FormGroup | AbstractControl;
  constructor() {}

  ngOnInit(): void {}
}
