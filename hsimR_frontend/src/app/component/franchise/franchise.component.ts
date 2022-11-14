import { Component, OnInit } from '@angular/core';
import { Franchise } from 'src/app/model/franchise';
import { FranchiseService } from 'src/app/service/franchise.service';
import { LoginService } from 'src/app/service/login.service';
import { TransverseService } from '../../service/transverse.service';
import { Transaction } from '../../model/transaction';
import { Tour } from '../../model/tour';
import { BanqueService } from '../../service/banque.service';
import { Etablissement } from '../../model/etablissement';

@Component({
  selector: 'app-franchise',
  templateUrl: './franchise.component.html',
  styleUrls: ['./franchise.component.less']
})
export class FranchiseComponent implements OnInit {

franchise!:Franchise;
lDepenses:Transaction[]=[new Transaction(0,"treeeeeeeeeeeeeeeeeeeees lonnnnnnnnnnnnnnnnng libeeeeeeeeeellé",null,new Franchise(1,"NomD","",0,"",0,0,undefined),new Tour(0,"MOIS",1,2,0))];
depensesColonnes=["tour","destinataire","libelle","montant"];
lGains:Transaction[] = [new Transaction(100,"treeeeeeeeeeeeeeeeeeeees lonnnnnnnnnnnnnnnnng libeeeeeeeeeellé",new Franchise(1,"NomS","",0,"",0,0,undefined),{id:1},new Tour(0,"MOIS",1,2,0))];
gainsColonnes=["tour","emetteur","libelle","montant"];
lEtablissements:Etablissement[] = [new Etablissement(1,"Etablissement 1","Elevage"),new Etablissement(2,"Etablissement 2","Performance")];
etablissementColonnes=["nom","type","details"];


//ecran
financeSection:boolean = false;

  constructor(private transverseService:TransverseService, private loginService:LoginService, private franchiseService:FranchiseService, private banqueService:BanqueService) {
    //nom provisoire en attendant le nom de la franchise
    this.transverseService.updateTitle('Franchise');
    this.franchise = this.loginService.userValue;
    this.transverseService.updateTitle(this.franchise.nom.toUpperCase());
  }

  ngOnInit(): void {
    this.franchiseService.getFranchise().subscribe(res => {this.franchise = res});
    this.banqueService.historique("depense").subscribe(res => {this.lDepenses = res});
    this.banqueService.historique("gain").subscribe(res => {this.lGains = res});
  }

  showFinance(){
    this.financeSection = !this.financeSection;
  }

}
