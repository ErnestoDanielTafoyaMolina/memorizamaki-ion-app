import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  userData = {
    email: '',
    password: '',
  };
  constructor() { }

  ngOnInit() {
    console.log("Welcome to signin")
  }

}
