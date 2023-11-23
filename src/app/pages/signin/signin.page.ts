import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
  constructor( private authService: AuthService,private router:Router ){}
  ngOnInit(){
    const token = localStorage.getItem('token');
    if(token){

    }
  }

  async onSignin() {
      this.authService.signIn(this.userData).subscribe(
        (response:any) => {
          // Accede al token si está presente en la respuesta
          const token = response?.token;
          localStorage.setItem("token", token);
          console.log("token: ", token);
          this.router.navigate(['/']);
        },
        (error:any) => {
          console.error(error);
        }
      );
  }
}
