import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class KatakanaService {
  URL = environment.URL
  constructor(
    private http:HttpClient
  ) { }
  getKatakana(){
    return this.http.get<any>(this.URL+'/katakana');
  }
}
