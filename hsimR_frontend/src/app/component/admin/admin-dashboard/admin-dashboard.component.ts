import { Component, OnInit } from '@angular/core';
import { Tour } from 'src/app/model/tour';
import { TourService } from 'src/app/service/tour.service';
import { TransverseService } from 'src/app/service/transverse.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.less']
})
export class AdminDashboardComponent implements OnInit {

  //variables
  tourActif?:Tour;

  constructor(private transverseService:TransverseService, private tourService:TourService) { 
    this.transverseService.updateTitle("Dashboard administrateur");
    this.tourService.getTourActif().subscribe(res => {
      this.tourActif = res;
    })
  }

  ngOnInit(): void {
  }

}
