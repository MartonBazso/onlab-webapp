import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  _url: string = '';
  entities: BehaviorSubject<any[]>;
  set url(url: string) {
    this._url = url;
  }

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.entities = new BehaviorSubject<any[]>([]);
   }

  list(): void {
    this.httpClient.get<any[]>(`${this.baseUrl}/${this._url}`).subscribe(data => {
      this.entities.next(data);
    });
  }

  get(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${this._url}/${id}`);
  }

  add(entity: any) {
    return this.httpClient.post(`${this.baseUrl}/${this._url}`, entity);
  }

  update(entity: any) {
    return this.httpClient.put(`${this.baseUrl}/${this._url}/${entity.id}`, entity);
  }

  delete(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/${this._url}/${id}`);
  }
}
