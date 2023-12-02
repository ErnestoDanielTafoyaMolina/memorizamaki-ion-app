import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL = environment.URL;
  constructor(

    private http:HttpClient

  ) { }

  getUserInfo(){
    return this.http.get<any>(this.URL+'/profile');
  }
  postUserImage(img:any){
    return this.http.patch<any>(this.URL+'/update-img', img)
  }
}
