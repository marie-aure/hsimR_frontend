import { Component, OnInit } from '@angular/core';
import { Tour } from 'src/app/model/tour';
import { TourService } from 'src/app/service/tour.service';
import { TransverseService } from 'src/app/service/transverse.service';
import { InfoPassage } from '../../../model/info-passage';
import { MatDialog } from '@angular/material/dialog';
import { AdminTourSuivantConfirmDialogComponent } from './admin-tour-suivant-confirm-dialog/admin-tour-suivant-confirm-dialog.component';
import { Router } from '@angular/router';
import { Trace } from '../../../model/trace';

@Component({
  selector: 'app-admin-tour-suivant',
  templateUrl: './admin-tour-suivant.component.html',
  styleUrls: ['./admin-tour-suivant.component.less']
})
export class AdminTourSuivantComponent implements OnInit {

  //variables
  tourActif?: Tour;
  infoPassage?: InfoPassage;
  //Error message
  errorMessage!: string;
  //traces
  traces:Trace[]=[];
  traceCol=['description','franchise','date'];

  constructor(private transverseService: TransverseService, private tourService: TourService, private dialog: MatDialog, private router:Router) {
    this.transverseService.updateTitle("Fin du tour");
  }

  ngOnInit(): void {
    this.tourService.getTourActif().subscribe(res => {
      this.tourActif = res;
      this.tourActif.semaineMois++;
      this.tourActif.annee++;
    });
    this.tourService.getInfoPassage().subscribe(res => {
      this.infoPassage = res;
      this.infoPassage.tourSuivant.semaineMois++;
      this.infoPassage.tourSuivant.annee++;
      console.log(this.infoPassage);
    });
    this.transverseService.getTrace(["FIN_TOUR"]).subscribe(res => {this.traces=res;});
  }

  validerFinDuTour() {
    const dialogRef = this.dialog.open(AdminTourSuivantConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.tourService.postFinTour().subscribe(
          () => {
            this.router.navigate(['/admin/dashboard']);
          },
          error => {
            this.errorMessage=error;
          }

        );
      } else { console.log("Fin du tour annulée"); }
    });
  }

}
