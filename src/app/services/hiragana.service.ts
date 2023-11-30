import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HiraganaService {
  URL = environment.URL;

  constructor( private http:HttpClient, private router:Router ) { }

  getHiragana(){
    return this.http.get<any>(this.URL+'/hiragana');
  }
  getHiraganaByLevel(level:any){
    return this.http.get<any>(`${this.URL}/hiragana/${level}`);
  }
}
