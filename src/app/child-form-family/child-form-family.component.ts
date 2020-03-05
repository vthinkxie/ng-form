import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-child-form-family',
  templateUrl: './child-form-family.component.html',
  styleUrls: ['./child-form-family.component.css']
})
export class ChildFormFamilyComponent implements OnInit {
  constructor(public controlContainer: ControlContainer) {}

  ngOnInit(): void {}
}
