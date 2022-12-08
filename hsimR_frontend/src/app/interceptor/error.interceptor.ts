import { Injectable } from '@angular/core';
import { HttpRequest,  HttpHandler,  HttpEvent,  HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { LoginService } from '../service/login.service';
import { catchError } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(catchError(err => {
          if (err.status === 401) {
              // auto logout if 401 response returned from api
              this.loginService.logout();
          }

          if (err.status === 403) {
            // redirect to franchise if 403 response returned from api
            this.router.navigate(['/franchise'],{ queryParams: { errorCode: 403 } });
        }
          const error = err.error.message || err.statusText;
          return throwError(error);
      }))
  }
}
