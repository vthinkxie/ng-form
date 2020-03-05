import { Component, OnInit } from '@angular/core';
import { RestApiService } from './rest-api.service';
import { DataBusService } from './data-bus.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private restApiService: RestApiService, private dataBusService: DataBusService) {}
  ngOnInit(): void {
    this.restApiService.getInitServerData().subscribe(data => {
      this.dataBusService.dataFromServer$.next(data);
    });
  }
}
