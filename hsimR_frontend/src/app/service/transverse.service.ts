import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransverseService {

  constructor() { }

  private emitChangeTitre = new Subject<string>();
change = this.emitChangeTitre.asObservable();

updateTitle(titre: string){
    this.emitChangeTitre.next(titre);
  }
}
