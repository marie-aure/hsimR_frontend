import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../model/transaction';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BanqueService {

  constructor(private httpClient: HttpClient) { }


  creerDepense(transaction:Transaction): Observable<Transaction> {
    return this.httpClient.post<Transaction>("http://localhost:8080/api/banque/depense",transaction);
  }

  historique(type:string): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>("http://localhost:8080/api/banque/historique/"+type);
  }

}