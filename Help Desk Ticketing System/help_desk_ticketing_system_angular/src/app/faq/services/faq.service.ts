import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Faq } from './faq';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  private baseUrl = 'http://127.0.0.1:8080/api/v1/faq';

  constructor(private http: HttpClient) { }

  getFaq(id: number): Observable<Faq> {
    return this.http.get<Faq>(`${this.baseUrl}/${id}`);
  }

  createFaq(faq: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, faq);
  }

  updateFaq(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  updateUploadFaq(id: number, faq: FormData): Observable<Object> {
    return this.http.post(`${this.baseUrl}/${id}`, faq);
  }

  deleteFaq(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCategoriesList(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/all-faq/${id}`);
  }

  getAllCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
