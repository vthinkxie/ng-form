import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataBusService } from '../data-bus.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  validateForm: FormGroup;

  // change to a factory if needed
  convertViewDataToFormValue(userData) {
    return userData;
  }

  convertFormValueToUserOperationData(formValue) {
    return formValue;
  }

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
    this.validateForm.valueChanges.pipe(map(this.convertFormValueToUserOperationData)).subscribe(data => {
      this.dataBusService.dataFromUserOperation$.next(data);
    });
    this.dataBusService.dataForView$.pipe(map(this.convertViewDataToFormValue)).subscribe(data => {
      this.validateForm.patchValue(data, { emitEvent: false });
    });
  }
}
