import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../model/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  creerFranchise(login:Login):Observable<void>{
    return this.httpClient.post<void>("http://localhost:8080/api/login/creer",login);
  }
}
