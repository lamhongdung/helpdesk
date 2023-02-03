import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url = "http://localhost:8080/categories";

  constructor(private http: HttpClient) { }

  getAllPatient(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
