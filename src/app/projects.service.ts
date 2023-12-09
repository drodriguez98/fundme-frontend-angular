import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class ProjectsService {

  constructor(private http: HttpClient) {}

  getProjects(): Observable<any> {
    const url = 'http://localhost:30030/fundme/controller/rest/projects/all';
    const headers = new HttpHeaders();
    return this.http.get<any>(url, { headers });
  }

  getTopProjects(): Observable<any> {
    const url = 'http://localhost:30030/fundme/controller/rest/projects/top';
    const headers = new HttpHeaders();
    return this.http.get<any>(url, { headers });
  }

}