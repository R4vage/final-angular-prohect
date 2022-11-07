import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        errorMessage = error.error instanceof ErrorEvent ? `Error: ${error.error.message}` : `Error Status: ${error.status}\nMessage: ${error.message}`;
        console.error(errorMessage);
        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
