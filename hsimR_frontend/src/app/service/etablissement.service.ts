import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Etablissement } from '../model/etablissement';

@Injectable({
  providedIn: 'root'
})
export class EtablissementService {

  constructor(private httpClient: HttpClient) { }

  getTypeEtablissement(): Observable<{ type: string, libelle: string }[]> {
    return this.httpClient.get<{ type: string, libelle: string }[]>("http://localhost:8080/api/etablissement/types");
  }

  creerEtablissement(etablissement: Etablissement, token: boolean): Observable<void> {
    return this.httpClient.post<void>("http://localhost:8080/api/etablissement/creer/" + token, etablissement);
  }

  getListeEtablissement():Observable<Etablissement[]>{
     return this.httpClient.get<Etablissement[]>("http://localhost:8080/api/etablissement/liste");
  }

  getEtablissement(id:number):Observable<Etablissement>{
    return this.httpClient.get<Etablissement>("http://localhost:8080/api/etablissement/" + id);
  }

}
