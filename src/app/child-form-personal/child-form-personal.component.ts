import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-child-form-personal',
  templateUrl: './child-form-personal.component.html',
  styleUrls: ['./child-form-personal.component.css']
})
export class ChildFormPersonalComponent implements OnInit {
  constructor(public controlContainer: ControlContainer) {}

  ngOnInit(): void {}
}
