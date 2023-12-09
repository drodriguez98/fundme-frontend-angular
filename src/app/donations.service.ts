import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class DonationsService {

  constructor(private http: HttpClient) {}

  getDonations(): Observable<any> {
    const url = 'http://localhost:30030/fundme/controller/rest/donations/all';
    const headers = new HttpHeaders();
    return this.http.get<any>(url, { headers });
  }

  getTopDonations(): Observable<any> {
    const url = 'http://localhost:30030/fundme/controller/rest/donations/top';
    const headers = new HttpHeaders();
    return this.http.get<any>(url, { headers });
  }
}