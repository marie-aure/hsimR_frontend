import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tour } from '../model/tour';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private httpClient: HttpClient) { }

  getTourActif():Observable<Tour>{
    return this.httpClient.get<Tour>("http://localhost:8080/api/tour/actif");
  }
}
