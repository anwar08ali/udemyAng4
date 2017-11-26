import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../_models/index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //@Input() myTitle : string;
  currentUser: User;
  
  constructor(){
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  };


  ngOnInit() {
    //console.log("hh",this.myTitle);
  }

}
