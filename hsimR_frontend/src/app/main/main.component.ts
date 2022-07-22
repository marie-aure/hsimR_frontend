import { Component, OnInit } from '@angular/core';
import { TransverseService } from '../service/transverse.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  titre!:string;

  constructor(private transverseService:TransverseService) { 
    transverseService.change.subscribe(data => {this.titre = data});
  }
  ngOnInit(): void {
  }

}
