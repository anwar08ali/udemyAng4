import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { AuthGuard } from './_guards/index';
import { LoginComponent } from './components/login/index';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend } from '@angular/http/testing';
import { AlertComponent } from './_directives/index';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    LoginComponent,
    AlertComponent,
    RegisterComponent,
    HeaderComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    AuthGuard,
    AlertService, 
    AuthenticationService, 
    UserService,
  // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions],
  bootstrap: [AppComponent]
})
export class AppModule { }
