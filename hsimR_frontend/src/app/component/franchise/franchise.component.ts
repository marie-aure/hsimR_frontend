import { Component, OnInit } from '@angular/core';
import { HelloWorldService } from '../../service/hello-world.service';

@Component({
  selector: 'app-franchise',
  templateUrl: './franchise.component.html',
  styleUrls: ['./franchise.component.less']
})
export class FranchiseComponent implements OnInit {

  constructor(private helloWorldService:HelloWorldService) { }

  hello:string="";

  ngOnInit(): void {
    this.helloWorldService.getHello().subscribe(res => {
      this.hello=res;
    });
  }

}
