import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import * as moment from 'moment';
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
    this.httpClient.post<User>(this.baseUrl + '/user/login', loginData)
      .subscribe(data => {
        this.setSession(data);
      })
  }

  getCurrentUser() {
    this.httpClient.get<User>(this.baseUrl + '/user/currentUser').subscribe(data => {
      this.currentUserSubject.next(data);
    });
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    this.clearCurrentUser();
  }

  clearCurrentUser() {
    this.currentUserSubject.next(null);
  }

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiration, 'second');
    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
    this.getCurrentUser();
  }


  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
