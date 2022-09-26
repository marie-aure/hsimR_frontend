import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Franchise } from '../model/franchise';

@Injectable({
  providedIn: 'root'
})
export class FranchiseService {

  constructor(private httpClient:HttpClient) { }

  getFranchise():Observable<Franchise>{
    return this.httpClient.get<Franchise>("http://localhost:8080/api/franchise/getInfo");
  }

  getDestinataire():Observable<Franchise[]>{
    return this.httpClient.get<Franchise[]>("http://localhost:8080/api/franchise/destinataire");
  }
}
