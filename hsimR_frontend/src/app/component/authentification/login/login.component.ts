import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Login } from 'src/app/model/login';
import { LoginService } from 'src/app/service/login.service';
import { TransverseService } from 'src/app/service/transverse.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  //Form
  loginForm = new FormGroup({
    nomFranchise: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  //Error message
  errorMessage!:string;
  returnUrl!:string;

  constructor(private transverseService:TransverseService, private loginService:LoginService, private router:Router, private route:ActivatedRoute) {
    this.transverseService.updateTitle('Se connecter');
    if(this.loginService.userValue){this.router.navigate(['/']);}
   }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  loginSubmit(){
    this.loginService.login(new Login(this.loginForm.value.nomFranchise, this.loginForm.value.password))
    .pipe(first())
    .subscribe(() => {
      this.router.navigate([this.returnUrl]);
    },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
      });
  }

}
