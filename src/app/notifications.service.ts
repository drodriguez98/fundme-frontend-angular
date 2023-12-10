import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NotificationsService {

  constructor(private http: HttpClient) {}

  getNotifications(): Observable<any> {
    const url = 'http://localhost:30030/notifications/all';
    const headers = new HttpHeaders();
    return this.http.get<any>(url, { headers });
  }

  getNotification(notificationId: number): Observable<any> {

    const url = 'http://localhost:30030/notifications/get';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify({id: notificationId});
    return this.http.post(url, body, {headers});

  }

  newNotification(notification : any): void {

    const url = 'http://localhost:30030/notifications/add';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = notification;
    this.http.post(url, body, { headers }).subscribe();

  }

  editNotification(notification : any): void {

    const url = 'http://localhost:30030/notifications/update';
    const body = notification;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.put(url, body,{headers}).subscribe();

  }

  deleteNotification(notificationId: number): void {

    const url = 'http://localhost:30030/notifications/delete';
    const body = { id: notificationId };
    const options = {
      body: body,
      headers: new HttpHeaders()
    };
    this.http.delete(url, options).subscribe();
    
  }

}