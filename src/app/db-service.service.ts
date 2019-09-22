import {Injectable} from '@angular/core';
import axios, {AxiosResponse} from 'axios';
import {Observable, of} from 'rxjs';
import {catchError, switchMap, tap} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {

  constructor() {
  }

  public getAllProjects(): Observable<any> {
    const urlToGetAllProjects = 'http://localhost:8000/project/';
    return of(axios.get(urlToGetAllProjects)).pipe(
      switchMap(response => response));
  }
}
