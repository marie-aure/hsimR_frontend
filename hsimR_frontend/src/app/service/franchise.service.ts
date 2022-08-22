import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Franchise } from '../model/franchise';

@Injectable({
  providedIn: 'root'
})
export class FranchiseService {

  constructor(private httpClient:HttpClient) { }
}
