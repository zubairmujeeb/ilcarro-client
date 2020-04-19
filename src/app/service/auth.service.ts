import { LoginModel } from './../models/login-model';
import { Auth } from './../models/auth';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(loginModel: LoginModel) {

    return this.http.post<Auth>('http://localhost:8860/login', loginModel).pipe(
      retry(1),
      catchError(this.handleError)
    );

  }

  public callLogin(loginModel: LoginModel) {

    this.login(loginModel).subscribe(this.setSession, this.handleError);

  }

  private setSession(authResult: Auth) {

    // tslint:disable-next-line: no-debugger
    debugger;
    if (authResult.status === 'true') {
      console.log('setting id token: ' + authResult.token);
      localStorage.setItem('auth_token', authResult.token);
    } else {
      return throwError('invalid username/password');
    }
  }

  handleError(err) {
    // tslint:disable-next-line: no-debugger
    debugger;
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${err.error.message}`;
    } else {
      // server-side error
      errorMessage = ` ${err.status}: ${err.message}`;
    }
    alert('invalid username/password');
    return throwError(errorMessage);
  }
}
