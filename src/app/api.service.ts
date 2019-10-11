import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  ping$(): Observable<any> {
    return this.http.get('/api/external');
  }

  public getAllProjects(): Observable<any> {
    const urlToGetAllProjects = 'http://localhost:8000/project/';
    return this.http.get(urlToGetAllProjects);
  }

  public putNewLike(projectId, likeCont, reactedUsers): Observable<any> {
    const urlToUpdateLikes = 'http://localhost:8000/project/' + projectId + '/likes/' + likeCont;
    const payLoad = {
      reactedUsrs: reactedUsers
    };
    return this.http.put(urlToUpdateLikes, payLoad);
  }


}
