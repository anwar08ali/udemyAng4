import { Component, OnInit, OnChanges, DoCheck, AfterContentInit } from '@angular/core';
import { AuthenticationService } from './_services/index';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  //this variable to be used later when ngIf will be used to show hide login page in app.component.html
  isAuthenticated = false;
  constructor(private authSrv: AuthenticationService){
  isLoggedOut = new Subject<boolean>();
  ngOnInit(){
    this.authSrv.isLoggedOut.subscribe(
      (loggedOut : boolean) => {
        this.isAuthenticated = loggedOut;
      }
    );
  }
}
