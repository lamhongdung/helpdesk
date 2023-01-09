import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Status } from './status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private baseUrl = 'http://127.0.0.1:8080/api/v1/status';

  constructor(private http: HttpClient) { }

  getStatus(id: number): Observable<Status> {
    return this.http.get<Status>(`${this.baseUrl}/${id}`);
  }

  createStatus(status: FormData): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, status);
  }

  updateStatus(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  updateUploadStatus(id: number, status: FormData): Observable<Object> {
    return this.http.post(`${this.baseUrl}/${id}`, status);
  }

  deleteStatus(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getStatusList(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/all-categories/${id}`);
  }

  getAllStatus(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
