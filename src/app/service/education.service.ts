import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EducationModel } from '../models/education';

const baseUrl = "http://localhost:8080/education";


@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http: HttpClient) { }

  save(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  get(id: any): Observable<EducationModel> {
    return this.http.get<EducationModel>(`${baseUrl}/${id}`);
  }
  getAll(): Observable<EducationModel[]> {
    return this.http.get<EducationModel[]>(baseUrl);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
