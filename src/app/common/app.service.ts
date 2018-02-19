import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  loading$: Observable<boolean> = Observable.of(false);
  constructor() { }

  fireLoader() {
    this.loading$ = Observable.of(true);
  }

  stopLoader() {
    this.loading$ = Observable.of(false);
  }

}
