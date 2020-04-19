import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
        Authorization: `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuaXJAZ21haWwuY29tIiwiZXhwIjoxNTg3MjUyMDM5LCJpYXQiOjE1ODcyMzQwMzl9.KWa0AxJQfYxdRD7ZA0syPVPClgZaxRnf0-4e6rj99GFaPWyCIfepS4OayljzAZ9UwRtRMks__3uo94xbwba_dw`,
      },
    });

    return next.handle(req);
  }
}
