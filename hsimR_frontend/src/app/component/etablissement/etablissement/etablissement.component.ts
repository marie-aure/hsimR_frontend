import { Component, OnInit } from '@angular/core';
import { TransverseService } from '../../../service/transverse.service';
import { ActivatedRoute } from '@angular/router';
import { Etablissement } from '../../../model/etablissement';
import { EtablissementService } from '../../../service/etablissement.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.component.html',
  styleUrls: ['./etablissement.component.less']
})
export class EtablissementComponent implements OnInit {

  etablissement!: Etablissement;

  //mock data
  lPersonnels:{}[] = [{nom:"NOM", prenom:"Prénom", role:{libelle:"Gérant"}, genre:"féminin", age:"40"},{nom:"NOM2", prenom:"Prénom2", role:{libelle:"Cavalier"}, genre:"masculin", age:"27"}];
  personnelColonnes =  ["nom","role","genre","age"];
  lChevaux:{}[] = [{prefixe:"PR", nom:"Nom", suffixe:"SU", type:{libelle:"Poney"}, race:"Shetland",genre:"Hongre",age:8},
  {prefixe:"", nom:"Nom2", suffixe:"SU", type:{libelle:"Cheval"}, race:"Selle français",genre:"Jument",age:18},
  {prefixe:"PR", nom:"Nom3", suffixe:"", type:{libelle:"Trait"}, race:"Percheron",genre:"Etalon",age:13}];
  chevauxColonnes = ["nom","type","race","genre","age"];
  lConcours:{}[] = [{nom:"concours 1",discipline:"CSO",date:"tour 1", statut:"Ouvert"},{nom:"concours 2",discipline:"Halter",date:"tour 6", statut:"Fermé"}];
  concoursColonnes = ["nom","discipline","date","statut","details"];

  constructor(private transverseService: TransverseService, private route: ActivatedRoute, private etablissementService: EtablissementService) {
    this.transverseService.updateTitle("Etablissement");
  }

  ngOnInit(): void {
    this.etablissementService.getEtablissement(Number(this.route.snapshot.paramMap.get('idEtablissement'))).subscribe(res => {
      this.etablissement = res;
      this.transverseService.updateTitle(this.etablissement.nom);
    });
  }

}
