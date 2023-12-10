import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AreasService {

  constructor(private http: HttpClient) {}

  getAreas(): Observable<any> {
    const url = 'http://localhost:30030/areas/all';
    const headers = new HttpHeaders();
    return this.http.get<any>(url, { headers });
  }

  getArea(areaId: number): Observable<any> {

    const url = 'http://localhost:30030/areas/get';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify({id: areaId});
    return this.http.post(url, body, {headers});

  }

  newArea(area : any): void {

    const url = 'http://localhost:30030/areas/add';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = area;
    this.http.post(url, body, { headers }).subscribe();

  }

  editArea(area : any): void {

    const url = 'http://localhost:30030/areas/update';
    const body = area;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.put(url, body,{headers}).subscribe();

  }

  deleteArea(areaId: number): void {

    const url = 'http://localhost:30030/areas/delete';
    const body = { id: areaId };
    const options = {
      body: body,
      headers: new HttpHeaders()
    };
    this.http.delete(url, options).subscribe();
    
  }

}