import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CommentsService {

  constructor(private http: HttpClient) {}

  getComments(): Observable<any> {
    const url = 'http://localhost:30030/comments/all';
    const headers = new HttpHeaders();
    return this.http.get<any>(url, { headers });
  }

  getComment(commentId: number): Observable<any> {

    const url = 'http://localhost:30030/comments/get';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify({id: commentId});
    return this.http.post(url, body, {headers});

  }

  newComment(comment : any): void {

    const url = 'http://localhost:30030/comments/add';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = comment;
    this.http.post(url, body, { headers }).subscribe();

  }

  editComment(comment : any): void {

    const url = 'http://localhost:30030/comments/update';
    const body = comment;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.put(url, body,{headers}).subscribe();

  }

  deleteComment(commentId: number): void {

    const url = 'http://localhost:30030/comments/delete';
    const body = { id: commentId };
    const options = {
      body: body,
      headers: new HttpHeaders()
    };
    this.http.delete(url, options).subscribe();
    
  }

}