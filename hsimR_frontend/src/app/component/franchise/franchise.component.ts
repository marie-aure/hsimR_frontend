import { Component, OnInit } from '@angular/core';
import { Franchise } from 'src/app/model/franchise';
import { FranchiseService } from 'src/app/service/franchise.service';
import { LoginService } from 'src/app/service/login.service';
import { TransverseService } from '../../service/transverse.service';

@Component({
  selector: 'app-franchise',
  templateUrl: './franchise.component.html',
  styleUrls: ['./franchise.component.less']
})
export class FranchiseComponent implements OnInit {

franchise!:Franchise;

  constructor(private transverseService:TransverseService, private loginService:LoginService) {
    // temp title
    this.transverseService.updateTitle('Franchise');
    this.franchise = this.loginService.userValue;
    this.transverseService.updateTitle(this.franchise.nom.toUpperCase());
   }

  ngOnInit(): void {

  }

}
