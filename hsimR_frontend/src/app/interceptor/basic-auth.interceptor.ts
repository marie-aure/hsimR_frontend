import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login.service';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // add header with basic auth credentials if user is logged in and request is to the api url
      console.log(this.loginService.userValue);
      const franchise = this.loginService.userValue;
      const isLoggedIn = franchise && franchise.authdata;
      console.log(isLoggedIn);
      if (isLoggedIn) {
          request = request.clone({
              setHeaders: { 
                  Authorization: `Basic ${franchise.authdata}`
              }
          });
      }

      return next.handle(request);
  }
}
