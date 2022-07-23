import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  isLoggedIn?:boolean;

  constructor(private loginService: LoginService) {
    this.isLoggedIn=loginService.userValue!=null;
    this.loginService.change.subscribe(data => {this.isLoggedIn = data});
   }

  ngOnInit(): void {
  }

  logout() {
    this.loginService.logout();
  }

}
