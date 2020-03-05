import { Component, OnInit } from '@angular/core';
import { DataBusService } from '../data-bus.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  yaml = '';

  yamlChanges(value: string): void {
    try {
      const data = JSON.parse(value);
      this.dataBusService.userData$.next(data);
    } catch (e) {}
  }
  constructor(private dataBusService: DataBusService) {}

  ngOnInit(): void {
    this.dataBusService.displayData$.subscribe(data => {
      this.yaml = JSON.stringify(data, null, 4);
    });
  }
}
