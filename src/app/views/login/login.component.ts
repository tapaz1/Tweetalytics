import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {TwitterService } from '../../services/twitterSearch.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css',
    '../../app.component.css'
  ]
})
export class LoginComponent implements OnInit {

  public user: string;
  public password: string;

  constructor(private router: Router, private twitter: TwitterService) { }

  ngOnInit() {

  }

  loginUser () {
    if(typeof this.user !== 'undefined' && typeof this.password !== 'undefined') {
      if(this.user.toLowerCase() === 'adam' && this.password.toLowerCase() === 'pass') {
        console.log('Login user..');
        this.router.navigate(['/home']);
        this.twitter.authenticate();
      }
    }
  }

}
