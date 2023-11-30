import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HiraganaService {
  URL = environment.URL;
  params:any=''
  constructor( private http:HttpClient ) { }

  getHiragana(){
    return this.http.get<any>(this.URL+'/hiragana');
  }
  getHiraganaToBoard(){
    return this.http.get<any>(this.URL+'/hiragana/'+this.params)
  }
}
