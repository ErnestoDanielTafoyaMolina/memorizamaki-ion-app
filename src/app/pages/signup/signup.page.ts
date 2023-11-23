import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  userData = {
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    region: '',
  };
  constructor(
     private router:Router,
     private authService:AuthService
    ) { }

  ngOnInit() {
    console.log("Welcome to signup")
  }

  onSignup(){
    this.authService.signUp(this.userData).subscribe(
      (response:any) =>{
        const token = response?.token;
        localStorage.setItem('token',token);
        this.router.navigate(['/']);
      }
    )
  }
}
