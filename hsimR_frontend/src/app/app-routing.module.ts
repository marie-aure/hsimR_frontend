import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FranchiseComponent } from './component/franchise/franchise.component';
import { ErrorComponent } from './component/error/error.component';

const routes: Routes = [
  {path:'', redirectTo:'franchise', pathMatch: 'full'},
  { path: '',  component: MainComponent, children: [
    { path: 'franchise', component: FranchiseComponent },
    { path: '**', component: ErrorComponent }
  ]}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

