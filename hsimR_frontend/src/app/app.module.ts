import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//imports
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FranchiseComponent,
    ErrorComponent,
    CreerFranchiseComponent,
    HeaderComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
