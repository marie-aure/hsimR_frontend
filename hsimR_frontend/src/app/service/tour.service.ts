import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tour } from '../model/tour';
import { InfoPassage } from '../model/info-passage';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private httpClient: HttpClient) { }

  getTourActif():Observable<Tour>{
    return this.httpClient.get<Tour>("http://localhost:8080/api/tour/actif");
  }

  getInfoPassage():Observable<InfoPassage>{
    return this.httpClient.get<InfoPassage>("http://localhost:8080/api/tour/infoPassage");
  }

  postFinTour(){
    return this.httpClient.post("http://localhost:8080/api/tour/finTour",null);
  }
}
