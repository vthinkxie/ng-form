import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, ReplaySubject, Subject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { isEqual } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DataBusService {
  // data comes from the server
  dataFromServer$ = new ReplaySubject(1);
  // data from the user operation
  dataFromUserOperation$ = new BehaviorSubject(null);
  // data passed to all the components
  dataForView$ = combineLatest([this.dataFromServer$, this.dataFromUserOperation$]).pipe(
    map(([serverData, userData]) => {
      return this.combineServerAndUserData(serverData, userData);
    }),
    distinctUntilChanged(isEqual)
  );
  // combine strategy
  combineServerAndUserData(serverData, userData) {
    if (userData) {
      return userData;
    } else if (serverData) {
      return serverData;
    }
  }
  constructor() {}
}
