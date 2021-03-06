import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child-form-personal',
  templateUrl: './child-form-personal.component.html',
  styleUrls: ['./child-form-personal.component.css']
})
export class ChildFormPersonalComponent implements OnInit {
  @Input() parentForm: FormGroup | AbstractControl;
  constructor() {}

  ngOnInit(): void {}
}
