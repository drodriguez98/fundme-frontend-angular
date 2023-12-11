import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CountriesService {

  constructor(private http: HttpClient) {}

  getCountries(): Observable<any> {
    const url = 'http://localhost:30030/countries/all';
    const headers = new HttpHeaders();
    return this.http.get<any>(url, { headers });
  }

  getCountry(countryId: number): Observable<any> {

    const url = 'http://localhost:30030/countries/get';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify({id: countryId});
    return this.http.post(url, body, {headers});

  }

  newCountry(country : any): void {

    const url = 'http://localhost:30030/countries/add';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = country;
    this.http.post(url, body, { headers }).subscribe();

  }

  editCountry(country : any): void {

    const url = 'http://localhost:30030/countries/update';
    const body = country;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.put(url, body,{headers}).subscribe();

  }

  deleteCountry(countryId: number): void {

    const url = 'http://localhost:30030/countries/delete';
    const body = { id: countryId };
    const options = {
      body: body,
      headers: new HttpHeaders()
    };
    this.http.delete(url, options).subscribe();
    
  }

}