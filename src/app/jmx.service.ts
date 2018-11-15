import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, retry } from 'rxjs/operators';
import {
  HttpClientJsonpModule,
  HttpClientModule,
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap
} from 'rxjs/operators';

import { environment } from '../environments/environment';

@Injectable()
export class JmxService {

  // jmxUrl = 'http://iprofiles01.devcloud.scb:8021/jolokia-war-1.3.7';
  // jmxUrl = 'http://10.254.113.6:8022/jolokia-war-1.3.7'; // indi SIT
  jmxUrl = environment.jmxUrl;

  constructor(private http: HttpClient) {
    console.log('jmxUrl: ' + this.jmxUrl);
  }

  getOperations(): Observable<string[]> {
    const jmxRequest = {
      'type': 'exec',
      'mbean': 'indiJmx:name=EntApiAspect',
      'operation': 'list()'
    };
    const httpOptions = {};
    return this.http.post<string[]>(this.jmxUrl, jmxRequest, httpOptions)
      .pipe(
        tap(x => console.log(x)),
        map<any, string[]>(x => x.value)
      );

    // return of(['CaptivaApi.getTicket']);
  }

  addOperations(operationIds: string[]) {
    operationIds.map(x => {
      this.addOperation(x).subscribe(it => console.log(it));
    });
  }

  addOperation(operationId) {
    const jmxRequest = {
      'type': 'exec',
      'mbean': 'indiJmx:name=EntApiAspect',
      'operation': 'addOperationId(java.lang.String)',
      'arguments': [
        '' + operationId + ''
      ]
    };
    const httpOptions = {};
    return this.http.post<string[]>(this.jmxUrl, jmxRequest, httpOptions)
      .pipe(
        tap(x => console.log(x))
      );
  }

  reset() {
    const jmxRequest = {
      'type': 'exec',
      'mbean': 'indiJmx:name=EntApiAspect',
      'operation': 'clear()'
    };
    const httpOptions = {};
    return this.http.post<string[]>(this.jmxUrl, jmxRequest, httpOptions)
      .pipe(
        tap(x => console.log(x))
      );

  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    // return throwError(
    //   'Something bad happened; please try again later.');
    return 'error';
  }

}
