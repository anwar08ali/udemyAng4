import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../_models/index';
import { AuthenticationService } from '../../_services/index';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //@Input() myTitle : string;
  currentUser: User;
  
  constructor(private authenticationService: AuthenticationService,
  ){
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  };


  ngOnInit() {
    //console.log("hh",this.myTitle);
  }
  logout(){
    this.authenticationService.logout();
 }
}
