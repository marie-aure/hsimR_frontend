import { Component, OnInit } from '@angular/core';
import { HelloWorldService } from '../../service/hello-world.service';
import { TransverseService } from '../../service/transverse.service';

@Component({
  selector: 'app-franchise',
  templateUrl: './franchise.component.html',
  styleUrls: ['./franchise.component.less']
})
export class FranchiseComponent implements OnInit {

  constructor(private transverseService:TransverseService, private helloWorldService:HelloWorldService) {
    this.transverseService.updateTitle('Franchise');
   }

  hello:string="";

  ngOnInit(): void {
    
  this.helloWorldService.getHello().subscribe(res => {
      this.hello=res;
    }); 
  }

}
