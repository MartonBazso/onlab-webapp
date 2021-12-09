import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CreateUser, User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject: BehaviorSubject<User | null>;

  get currentUser(): Observable<User | null> {
    return this.currentUserSubject.asObservable();
  }

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.currentUserSubject = new BehaviorSubject<User | null>(null);
  }

  addUser(user: CreateUser) {
    return this.httpClient.post(this.baseUrl + '/user', user);
  }

  login(loginData: any) {
    this.httpClient.post<User>(this.baseUrl + '/user/login', loginData).subscribe(data => {
      this.currentUserSubject.next(data);
    });
  }

  getCurrentUser() {
    this.httpClient.get<User>(this.baseUrl + '/user/currentUser').subscribe(data => {
      this.currentUserSubject.next(data);
    });
  }

  logout() {
    this.currentUserSubject.next(null);
    return this.httpClient.put(this.baseUrl + '/user/login', null);
  }
}
