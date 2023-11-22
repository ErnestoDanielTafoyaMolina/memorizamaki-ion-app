import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL = environment.URL;
  constructor( private http:HttpClient, private router:Router) { }

  signUp( user:any ){
    return this.http.post<any>(this.URL+'/register', user);
  }
  signIn( user:any ){
    return this.http.post<any>(this.URL+'/login', user);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/signin'])
  }

}
