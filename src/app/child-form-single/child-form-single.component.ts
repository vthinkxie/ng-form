import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-child-form-single',
  templateUrl: './child-form-single.component.html',
  styleUrls: ['./child-form-single.component.css']
})
export class ChildFormSingleComponent implements OnInit {

  constructor(public controlContainer: ControlContainer) {}

  ngOnInit(): void {
  }

}
