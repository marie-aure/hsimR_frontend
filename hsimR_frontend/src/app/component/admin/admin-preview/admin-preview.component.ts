import { Component, OnInit } from '@angular/core';
import { TransverseService } from '../../../service/transverse.service';
import { Franchise } from '../../../model/franchise';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FranchiseService } from '../../../service/franchise.service';
import { BanqueService } from '../../../service/banque.service';
import { Transaction } from '../../../model/transaction';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-admin-preview',
  templateUrl: './admin-preview.component.html',
  styleUrls: ['./admin-preview.component.less']
})
export class AdminPreviewComponent implements OnInit {

  franchises ?: Franchise[];
  creerTransaction = new FormGroup({   
    franchiseControle : new FormControl(),
    montantControle: new FormControl('', [Validators.required, Validators.min(0.1)]),
    libelleControle : new FormControl('', Validators.required)
  })

  constructor(private transverseService:TransverseService, private franchiseService:FranchiseService, private banqueService:BanqueService) {
    this.transverseService.updateTitle('Admin preview');
   }
  

  ngOnInit(): void {
    this.franchiseService.getDestinataire().subscribe(res=> this.franchises = res);
  }

  creerTransactionSubmit(){
    this.banqueService.creerDepense(new Transaction(this.creerTransaction.value.montantControle,this.creerTransaction.value.libelleControle,null,{id:this.creerTransaction.value.franchiseControle},null)).subscribe(res => {console.log(res)}, error => {console.log(error)});
  }

  twoDecimalValue(){
    this.creerTransaction.value.montantControle = parseFloat(this.creerTransaction.value.montantControle).toFixed(2);
  }

}
