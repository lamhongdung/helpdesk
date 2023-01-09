import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from './ticket';
import { Comments } from './comments'; 

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private baseUrl = 'http://127.0.0.1:8080/api/v1/ticket';

  constructor(private http: HttpClient) { }

  getticket(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.baseUrl}/${id}`);
  }

  createticket(ticket: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, ticket);
  }

  updateticket(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  updateUploadticket(id: number, ticket: FormData): Observable<Object> {
    return this.http.post(`${this.baseUrl}/${id}`, ticket);
  }

  deleteticket(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getMyTicketList(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/my-ticket/${id}`);
  }

  getTicketDetails(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/details/${id}`);
  }

  getAllTicketList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all-ticket`);
  }

  getAllCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  saveComment(comment: Comments): Observable<Object> {
    return this.http.post(`http://127.0.0.1:8080/api/v1/comments`, comment);
  }

  deleteComments(id: number): Observable<any> {
    return this.http.delete(`http://127.0.0.1:8080/api/v1/comments/${id}`, { responseType: 'text' });
  }

  getCommentsList(id: number): Observable<any> {
    return this.http.get(`http://127.0.0.1:8080/api/v1/comments/all-users-comments/${id}`);
  }

  getAllComments(id: number): Observable<any> {
    return this.http.get(`http://127.0.0.1:8080/api/v1/comments/all-comments/${id}`);
  }
}
