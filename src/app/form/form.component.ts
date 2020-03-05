import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataBusService } from '../data-bus.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  validateForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private dataBusService: DataBusService) {}
  ngOnInit(): void {
    this.validateForm = this.formBuilder.group({
      personal: this.formBuilder.group({
        name: [null],
        id: [null]
      }),
      family: this.formBuilder.group({
        location: [null],
        number: [null]
      })
    });
    this.validateForm.valueChanges.subscribe(data => {
      this.dataBusService.userData$.next(data);
    });
    this.dataBusService.displayData$.subscribe((data) => {
      this.validateForm.patchValue(data);
    });
  }
}
