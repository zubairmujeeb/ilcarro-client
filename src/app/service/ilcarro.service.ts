import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class IlcarroService {

  constructor(private http: HttpClient) { }

  public register(user: User) {
    return this.http.post<User>('http://localhost:8860/api/registration', user);
  }
}
