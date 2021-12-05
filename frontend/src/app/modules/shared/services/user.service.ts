import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CreateUser, User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: HttpClient;
  baseUrl: string;
  private currentUserSubject: BehaviorSubject<User | null>;

  get currentUser(): Observable<User | null> {
    return this.currentUserSubject.asObservable();
  }

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl + 'api/User';
    this.currentUserSubject = new BehaviorSubject<User | null>(null);
  }

  addUser(user: CreateUser) {
    return this.http.post(this.baseUrl, user);
  }

  login(loginData: any) {
    this.http.post<User>(this.baseUrl + '/login', loginData).subscribe(data => {
      this.currentUserSubject.next(data);
    });
  }

  getCurrentUser() {
    this.http.get<User>(this.baseUrl + '/currentUser').subscribe(data => {
      this.currentUserSubject.next(data);
    });
  }

  logout() {
    this.currentUserSubject.next(null);
    return this.http.put(this.baseUrl + '/login', null);
  }
}
