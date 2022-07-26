import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../model/login';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Franchise } from '../model/franchise';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private franchiseSubject: BehaviorSubject<Franchise>;
  public franchise: Observable<Franchise>;

  private emitChangeIsLoggedIn = new Subject<boolean>();
  change = this.emitChangeIsLoggedIn.asObservable();

  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) {
    this.franchiseSubject = new BehaviorSubject<Franchise>(localStorage.getItem('franchise') ? JSON.parse(localStorage.getItem('franchise') || '{}') : null);
    this.franchise = this.franchiseSubject.asObservable();
    this.updateIsLoggedIn(localStorage.getItem('franchise') != null);
  }

  creerFranchise(login: Login): Observable<void> {
    return this.httpClient.post<void>("http://localhost:8080/api/login/creer", login);
  }

  login(login: Login) {
    return this.httpClient.post<Franchise>("http://localhost:8080/api/login/connexion", window.btoa(login.nom + ':' + login.password)).pipe(map(franchise => {
      // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
      franchise.authdata = window.btoa(login.nom + ':' + login.password);
      localStorage.setItem('franchise', JSON.stringify(franchise));
      this.franchiseSubject.next(franchise);
      this.updateIsLoggedIn(true);
      return franchise;
    }));
  }

  public get userValue(): Franchise {
    return this.franchiseSubject.value;
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('franchise');
    this.franchiseSubject = new BehaviorSubject<Franchise>(localStorage.getItem('franchise') ? JSON.parse(localStorage.getItem('franchise') || '{}') : null);
    this.updateIsLoggedIn(false);
    this.router.navigate(['/login']);
  }

  updateIsLoggedIn(loggedIn: boolean) {
    this.emitChangeIsLoggedIn.next(loggedIn);
  }

}
