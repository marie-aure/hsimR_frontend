import { Component, OnInit } from '@angular/core';
import { TransverseService } from '../../../service/transverse.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.component.html',
  styleUrls: ['./etablissement.component.less']
})
export class EtablissementComponent implements OnInit {

  constructor(private transverseService:TransverseService, private route:ActivatedRoute) {
    this.transverseService.updateTitle("Etablissement");
  }

  ngOnInit(): void {
   // this.transverseService.updateTitle("{nom}");

    this.route.queryParams.subscribe(params => {
      console.log(params);
    });
  }

}
