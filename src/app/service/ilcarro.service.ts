import { SearchFilters } from './../models/search-filters';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { catchError, map, tap, retry, filter } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { DatePipe } from '@angular/common';
import { UserComment } from '../models/user-comment';

@Injectable({
  providedIn: 'root'
})
export class IlcarroService {

  constructor(private http: HttpClient, public datepipe: DatePipe) { }

  public register(user: User) {
    return this.http.post<User>('http://localhost:8860/api/registration', user).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  public getLatestFeeds(): Observable<UserComment[]> {

    return this.http.get<UserComment[]>('http://localhost:8860/api/comments').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  public search(filters: SearchFilters): Observable<any> {

    // tslint:disable-next-line: max-line-length
    const url = 'http://localhost:8860/api/search?city=' + filters.city + '&startDate=' + this.datepipe.transform(filters.startDate, 'yyyy-MM-dd') + '&endDate=' + this.datepipe.transform(filters.endDate, 'yyyy-MM-dd') + '&minAmount=' + filters.minAmount + '&maxAmount=' + filters.maxAmount + '&ascending=' + filters.ascending + '&itemOnPage=' + filters.itemOnPage + '&currentPage=' + filters.currentPage;
    return this.http.get<any>(url).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  public getMostPopular(): Observable<any[]> {

    return this.http.get<any[]>('http://localhost:8860/api/car/best').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(err) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${err.error.message}`;
    } else {
      // server-side error
      errorMessage = ` ${err.status}: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
