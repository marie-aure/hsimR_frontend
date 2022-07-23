import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  constructor(private httpClient: HttpClient) { }

  getHello():Observable<string>{
    return this.httpClient.get<string>("http://localhost:8080/api/hello/get");
  }
}
