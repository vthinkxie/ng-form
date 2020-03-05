import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, ReplaySubject, Subject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { isEqual } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DataBusService {
  serverData$ = new ReplaySubject(1);
  userData$ = new BehaviorSubject(null);
  displayData$ = combineLatest([this.serverData$, this.userData$]).pipe(
    map(([serverData, userData]) => {
      if (userData) {
        return userData;
      } else if (serverData) {
        return serverData;
      }
    }),
    distinctUntilChanged(isEqual)
  );
  constructor() {}
}
