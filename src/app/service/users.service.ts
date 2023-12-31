import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {

    const url = 'http://localhost:30030/users/all';
    const headers = new HttpHeaders();
    return this.http.get<any>(url, { headers });

  }

  getUser(userId: number): Observable<any> {

    const url = 'http://localhost:30030/users/get';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify({ userId: userId });
    return this.http.post(url, body, { headers });

  }

  getAuthenticatedUser(userId: number): Observable<any> {

    const url = 'http://localhost:30030/users/getAuthenticated';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify({ userId: userId });
    return this.http.post(url, body, { headers });

  }

  newUser(user: any): void {

    const url = 'http://localhost:30030/users/add';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = user;
    this.http.post(url, body, { headers }).subscribe();

  }

  editUser(user: any): void {

    const url = 'http://localhost:30030/users/update';
    const body = user;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.put(url, body, { headers }).subscribe();

  }

  deleteUser(userId: number): void {

    const url = 'http://localhost:30030/users/delete';
    const body = { userId: userId };
    const options = {
      body: body,
      headers: new HttpHeaders()
    };
    this.http.delete(url, options).subscribe();

  }

  // Método para autenticar al usuario y obtener un token del backend

  authenticateUser(username: string, password: string): Observable<any> {

    const url = 'http://localhost:30030/users/authentication';
    const body = { username, password };
    return this.http.post(url, body);

  }

  getProjectsByUserId(userId: number): Observable<any> {

    const url = 'http://localhost:30030/projects/getByUser';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify({ userId: userId });
    return this.http.post(url, body, { headers });

  }

  getDonationsByUserId(userId: number): Observable<any> {

    const url = 'http://localhost:30030/donations/getByUser';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify({ userId: userId });
    return this.http.post(url, body, { headers });

  }

  getUnreadNotificationsByUserId(userId: number): Observable<any> {

    const url = 'http://localhost:30030/notifications/getUnread';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify({ userId: userId });
    return this.http.post(url, body, { headers });

  }

  getReadNotificationsByUserId(userId: number): Observable<any> {

    const url = 'http://localhost:30030/notifications/getRead';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify({ userId: userId });
    return this.http.post(url, body, { headers });

  }

}