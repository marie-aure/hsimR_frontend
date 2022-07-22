import { Component, OnInit } from '@angular/core';
import { TransverseService } from '../../../service/transverse.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../../service/login.service';
import { Login } from '../../../model/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creer-franchise',
  templateUrl: './creer-franchise.component.html',
  styleUrls: ['./creer-franchise.component.less']
})
export class CreerFranchiseComponent implements OnInit {

  //Form
  creerFranchiseForm = new FormGroup({
    nomFranchise: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  //Error message
  errorMessage!:string;

  constructor(private transverseService: TransverseService, private loginService: LoginService, private router: Router) {
    this.transverseService.updateTitle('Créer une franchise');
  }

  ngOnInit(): void {

  }

  creerFranchiseSubmit() {
    this.loginService.creerFranchise(new Login(this.creerFranchiseForm.value.nomFranchise, this.creerFranchiseForm.value.password))
      .subscribe(() => {
        this.router.navigate(['/login']);
      },
        error => {
          this.errorMessage = error.error.message;
        });
  }

}
