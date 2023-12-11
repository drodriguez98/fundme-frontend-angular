import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class DonationsService {

  constructor(private http: HttpClient) {}

  getDonations(): Observable<any> {
    const url = 'http://localhost:30030/donations/all';
    const headers = new HttpHeaders();
    return this.http.get<any>(url, { headers });
  }

  getTopDonations(): Observable<any> {
    const url = 'http://localhost:30030/donations/top';
    const headers = new HttpHeaders();
    return this.http.get<any>(url, { headers });
  }

  getDonation(donationId: number): Observable<any> {

    const url = 'http://localhost:30030/donations/get';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify({id: donationId});
    return this.http.post(url, body, {headers});

  }

  newDonation(donation : any): void {

    const url = 'http://localhost:30030/donations/add';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = donation;
    this.http.post(url, body, { headers }).subscribe();

  }

  editDonation(donation : any): void {

    const url = 'http://localhost:30030/donations/update';
    const body = donation;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.put(url, body,{headers}).subscribe();

  }

  deleteDonation(donationId: number): void {

    const url = 'http://localhost:30030/projects/delete';
    const body = { id: donationId };
    const options = {
      body: body,
      headers: new HttpHeaders()
    };
    this.http.delete(url, options).subscribe();
    
  }
  
}