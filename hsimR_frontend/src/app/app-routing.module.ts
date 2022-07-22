import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FranchiseComponent } from './component/franchise/franchise.component';
import { ErrorComponent } from './component/error/error.component';
import { CreerFranchiseComponent } from './component/authentification/creer-franchise/creer-franchise.component';
import { LoginComponent } from './component/authentification/login/login.component';
import { AuthenticationGuard } from './guard/authentication.guard';

const routes: Routes = [
  {path:'', redirectTo:'franchise', pathMatch: 'full'},
  { path: '',  component: MainComponent, children: [
    { path: 'franchise', canActivate:[AuthenticationGuard] , component: FranchiseComponent },
    { path: 'creerFranchise', component: CreerFranchiseComponent},
    { path: 'login', component: LoginComponent},
    { path: '**', component: ErrorComponent }
  ]}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

