import { Component, OnInit } from '@angular/core';
import { Tour } from 'src/app/model/tour';
import { TourService } from 'src/app/service/tour.service';
import { TransverseService } from 'src/app/service/transverse.service';

@Component({
  selector: 'app-admin-tour-suivant',
  templateUrl: './admin-tour-suivant.component.html',
  styleUrls: ['./admin-tour-suivant.component.less']
})
export class AdminTourSuivantComponent implements OnInit {

  //variables
  tourActif?:Tour;

  constructor(private transverseService: TransverseService, private tourService:TourService) {
    this.transverseService.updateTitle("Fin du tour");
    this.tourService.getTourActif().subscribe(res => {
      this.tourActif = res;
    });
  }

  ngOnInit(): void {
  }

}
