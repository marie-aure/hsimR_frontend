import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  isLoggedIn?:boolean;
  userRole:string;

  constructor(private loginService: LoginService) {
    this.isLoggedIn=loginService.userValue!=null;
    this.loginService.change.subscribe(data => {this.isLoggedIn = data});
    this.userRole=loginService.userValue.role;
   }

  ngOnInit(): void {
  }

  logout() {
    this.loginService.logout();
  }

}
