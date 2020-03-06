import { Injectable } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  mergeServerAndPlaceHolder(serverData, placeholderData) {
    return { ...serverData, ...placeholderData };
  }
  getServerData() {
    return of({
      singleValue: 'single',
      personal: { name: 'Lily', id: 1234412 }
    });
  }
  getPlaceholderData() {
    return of({
      family: {
        location: 'New York',
        number: 5,
        descendant: {
          name: 'descendant'
        }
      }
    });
  }
  getInitServerData() {
    return forkJoin([this.getPlaceholderData(), this.getServerData()]).pipe(
      map(([p, s]) => {
        return this.mergeServerAndPlaceHolder(s, p);
      })
    );
  }
  constructor() {}
}
