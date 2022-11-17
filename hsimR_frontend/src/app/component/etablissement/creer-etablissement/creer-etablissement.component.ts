import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Etablissement } from '../../../model/etablissement';
import { Franchise } from '../../../model/franchise';
import { LoginService } from '../../../service/login.service';
import { TransverseService } from '../../../service/transverse.service';
import { EtablissementService } from '../../../service/etablissement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creer-etablissement',
  templateUrl: './creer-etablissement.component.html',
  styleUrls: ['./creer-etablissement.component.less']
})
export class CreerEtablissementComponent implements OnInit {

  franchise!: Franchise;
  lTypesEtablissement: { type: string, libelle: string }[] = [];
  etablissementForm = new FormGroup({
    etablissement: new FormGroup({
      nomEtablissement: new FormControl('', Validators.required),
      typeEtablissement: new FormControl('', Validators.required)
    })
  });
  useEtabToken!: boolean;
  etablissementCree!: Etablissement
  errorMessage: string = "";

  constructor(private loginService: LoginService, private transverseService: TransverseService, private etablissementService: EtablissementService, private router: Router) {
    this.transverseService.updateTitle('Créer un établissement');
    this.franchise = this.loginService.userValue;
  }

  ngOnInit() {
    this.etablissementService.getTypeEtablissement().subscribe(res => { this.lTypesEtablissement = res });
  }

  useToken(use: boolean) {
    this.useEtabToken = use;
  }

  creerEtablissement() {
    this.etablissementCree = new Etablissement(null, this.etablissementForm.value.etablissement.nomEtablissement, { type: this.etablissementForm.value.etablissement.typeEtablissement, libelle: "" });
    this.etablissementService.creerEtablissement(this.etablissementCree, this.useEtabToken).subscribe(() => {
      this.router.navigate(['/franchise']);
    },
      error => {
        this.errorMessage = error;
      });
  }
}