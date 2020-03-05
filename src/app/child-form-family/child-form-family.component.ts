import { Component, OnInit } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-child-form-family',
  templateUrl: './child-form-family.component.html',
  styleUrls: ['./child-form-family.component.css']
})
export class ChildFormFamilyComponent implements OnInit {
  constructor(public formGroupDirective: FormGroupDirective) {}

  ngOnInit(): void {}
}
