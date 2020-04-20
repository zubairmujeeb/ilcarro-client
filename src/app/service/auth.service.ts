import { LoginModel } from './../models/login-model';
import { Auth } from './../models/auth';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { retry, catchError, tap, mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly AUTH_TOKEN = 'AUTH_TOKEN';
  constructor(private http: HttpClient) { }

  public login(loginModel: LoginModel): Observable<boolean> {

    return this.http.post<any>('http://localhost:8860/login', loginModel).pipe(
      tap(authResult => this.setToken(authResult)),
      mapTo(true),
      catchError(err => this.handleError(err))
    );

  }

  private setToken(authResult: Auth) {

    console.log('setting id token: ' + authResult.token);
    localStorage.setItem(this.AUTH_TOKEN, authResult.token);
  }

  isLoggedIn() {
    return !!this.getAuthToken();
  }

  getAuthToken() {
    return localStorage.getItem(this.AUTH_TOKEN);
  }

  handleError(err) {
    // tslint:disable-next-line: no-debugger
    debugger;
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = 'Error: ' + err.error.message;
    } else {
      // server-side error
      errorMessage = err.status + ': ' + err.error.message;
    }
    alert(errorMessage);
    return of(false);
  }
}
