import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//imports
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input';

//components
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FranchiseComponent } from './component/franchise/franchise.component';
import { ErrorComponent } from './component/error/error.component';
import { CreerFranchiseComponent } from './component/authentification/creer-franchise/creer-franchise.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './component/authentification/login/login.component';
import { BasicAuthInterceptor } from './interceptor/basic-auth.interceptor';
import { ErrorInterceptor } from './interceptor/error.interceptor';
import { AdminDashboardComponent } from './component/admin/admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FranchiseComponent,
    ErrorComponent,
    CreerFranchiseComponent,
    HeaderComponent,
    LoginComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
