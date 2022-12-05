import { Component, OnInit } from '@angular/core';
import { Franchise } from 'src/app/model/franchise';
import { FranchiseService } from 'src/app/service/franchise.service';
import { LoginService } from 'src/app/service/login.service';
import { TransverseService } from '../../service/transverse.service';
import { Transaction } from '../../model/transaction';
import { Tour } from '../../model/tour';
import { BanqueService } from '../../service/banque.service';
import { Etablissement } from '../../model/etablissement';
import { EtablissementService } from '../../service/etablissement.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-franchise',
  templateUrl: './franchise.component.html',
  styleUrls: ['./franchise.component.less']
})
export class FranchiseComponent implements OnInit {

  franchise!: Franchise;
  lDepenses: Transaction[] = [];
  depensesColonnes = ["tour", "destinataire", "libelle", "montant"];
  lGains: Transaction[] = [];
  gainsColonnes = ["tour", "emetteur", "libelle", "montant"];
  lEtablissements: Etablissement[] = [];
  etablissementColonnes = ["nom", "type", "details"];

  //ecran
  financeSection: boolean = false;
  errorMessage!: string;

  constructor(private transverseService: TransverseService, private loginService: LoginService, private franchiseService: FranchiseService, private banqueService: BanqueService, private etablissementService: EtablissementService, private route: ActivatedRoute) {
    //nom provisoire en attendant le nom de la franchise
    this.transverseService.updateTitle('Franchise');
    this.franchise = this.loginService.userValue;
    this.transverseService.updateTitle(this.franchise.nom.toUpperCase());
  }

  ngOnInit(): void {
    this.franchiseService.getFranchise().subscribe(res => { this.franchise = res; this.transverseService.updateTitle(this.franchise.nom) });
    this.banqueService.historique("depense").subscribe(res => { this.lDepenses = res });
    this.banqueService.historique("gain").subscribe(res => { this.lGains = res });
    this.etablissementService.getListeEtablissement().subscribe(res => { console.log(res); this.lEtablissements = res });
    this.route.queryParams.subscribe(params => {
      if (params['errorCode']) {
        this.errorMessage = this.transverseService.getErrorMessage(params['errorCode']);
      };
    });
  }


showFinance(){
  this.financeSection = !this.financeSection;
}

}
