import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobModel } from '../models/job';

const baseUrl = "http://localhost:8080/jobs";


@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) { }

  save(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  get(id: any): Observable<JobModel> {
    return this.http.get<JobModel>(`${baseUrl}/${id}`);
  }
  getAll(): Observable<JobModel[]> {
    return this.http.get<JobModel[]>(baseUrl);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }



}
