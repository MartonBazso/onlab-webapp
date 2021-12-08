import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IdNameModel } from '../models/id-name.interface';

@Injectable({
  providedIn: 'root'
})
export class EnumService {
  private _categories: BehaviorSubject<IdNameModel[]>;
  get categories(): Observable<IdNameModel[]> {
    return this._categories.asObservable();
  }

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this._categories = new BehaviorSubject<IdNameModel[]>([]);
   }

  list(type: string): void {
    this.httpClient.get<IdNameModel[]>(`${this.baseUrl}/enums/${type}`).subscribe(data => {
      this._categories.next(data);
    });
  }
}
