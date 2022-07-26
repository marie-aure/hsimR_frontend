import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Trace } from '../model/trace';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransverseService {

  constructor(private httpClient:HttpClient) { }

  private emitChangeTitre = new Subject<string>();
  change = this.emitChangeTitre.asObservable();

  updateTitle(titre: string) {
    this.emitChangeTitre.next(titre);
  }

  getTrace(types:string[]):Observable<Trace[]>{
    return this.httpClient.post<Trace[]>("http://localhost:8080/api/trace/admin/get",types);
  }

  getErrorMessage(code:number):string{
    let errorMessage:string = 'Unknown error with code ' + code ;
    if (code == 403)errorMessage = 'Cette page n\'est pas autorisée pour la franchise connectée';
    return errorMessage;
  }
}
