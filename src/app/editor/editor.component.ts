import { Component, OnInit } from '@angular/core';
import { DataBusService } from '../data-bus.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  yaml = '';

  covertViewDataToYaml(value) {
    return JSON.stringify(value, null, 4);
  }

  convertYamlToUserData(value) {
    try {
      const data = JSON.parse(value);
      this.dataBusService.dataFromUserOperation$.next(data);
    } catch (e) {}
  }

  yamlChanges(value: string): void {
    this.convertYamlToUserData(value);
  }

  constructor(private dataBusService: DataBusService) {}

  ngOnInit(): void {
    this.dataBusService.dataForView$.pipe(map(this.covertViewDataToYaml)).subscribe(data => {
      this.yaml = data;
    });
  }
}
