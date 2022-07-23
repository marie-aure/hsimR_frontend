import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('test:test')
    })
  };

  getHello():Observable<string>{
    var header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Basic ${btoa('test:test')}`)
    }
    console.log(header)
    return this.httpClient.get<string>("http://localhost:8080/api/hello/get", header );
  }
}
