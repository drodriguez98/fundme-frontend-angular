import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class ProjectsService {

  constructor(private http: HttpClient) {}

  getProjects(): Observable<any> {
    const url = 'http://localhost:30030/projects/all';
    const headers = new HttpHeaders();
    return this.http.get<any>(url, { headers });
  }

  getTopProjects(): Observable<any> {
    const url = 'http://localhost:30030/projects/top';
    const headers = new HttpHeaders();
    return this.http.get<any>(url, { headers });
  }

  getProject(projectId: number): Observable<any> {

    const url = 'http://localhost:30030/projects/get';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify({projectId: projectId});
    return this.http.post(url, body, {headers});

  }

  newProject(project : any): void {

    const url = 'http://localhost:30030/projects/add';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = project;
    this.http.post(url, body, { headers }).subscribe();

  }

  editProject(project : any): void {

    const url = 'http://localhost:30030/projects/update';
    const body = project;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.put(url, body,{headers}).subscribe();

  }

  deleteProject (projectId: number): void {

    const url = 'http://localhost:30030/projects/delete';
    const body = { projectId: projectId };
    const options = {
      body: body,
      headers: new HttpHeaders()
    };
    this.http.delete(url, options).subscribe();
    
  }

  getDonationsByProjectId(projectId: number): Observable<any> {

    const url = 'http://localhost:30030/donations/getByProject';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify({projectId: projectId});
    return this.http.post(url, body, {headers});

  }

  getCommentsByProjectId(projectId: number): Observable<any> {

    const url = 'http://localhost:30030/comments/getByProject';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify({projectId: projectId});
    return this.http.post(url, body, {headers});

  }


}